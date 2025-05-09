
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { languages } from "@/data/languages";
import { RegistrationFormData } from "@/types";
import { sendWhatsAppMessage } from "@/services/whatsappService";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  fullName: z.string().min(3, { message: "الاسم الكامل مطلوب" }),
  age: z.string().refine((val) => !isNaN(Number(val)), {
    message: "العمر يجب أن يكون رقمًا",
  }),
  email: z.string().email({ message: "البريد الإلكتروني غير صالح" }),
  phone: z.string().min(8, { message: "رقم الهاتف غير صالح" }),
  level: z.string().min(1, { message: "يرجى اختيار المستوى" }),
  language: z.string().min(1, { message: "يرجى اختيار اللغة" }),
  classType: z.string().min(1, { message: "يرجى اختيار نوع الاشتراك" }),
  // Bank card information
  cardName: z.string().min(3, { message: "اسم حامل البطاقة مطلوب" }),
  cardNumber: z.string().min(12, { message: "رقم البطاقة غير صالح" })
    .max(19, { message: "رقم البطاقة غير صالح" }),
  cardExpiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { 
    message: "تاريخ انتهاء البطاقة غير صالح (MM/YY)" 
  }),
  cardCvc: z.string().min(3, { message: "رمز CVC غير صالح" }).max(4),
  saveCardInfo: z.boolean().optional(),
});

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      age: "",
      email: "",
      phone: "",
      level: "",
      language: "",
      classType: "",
      cardName: "",
      cardNumber: "",
      cardExpiry: "",
      cardCvc: "",
      saveCardInfo: false,
    },
  });

  // This would typically come from an environment variable or configuration
  const whatsappAdminNumber = "212612345678"; // Example number with country code (Morocco)

  const onSubmit = (data: RegistrationFormData) => {
    setIsSubmitting(true);

    try {
      // Format the message for WhatsApp
      const message = `
طلب تسجيل جديد:
الاسم الكامل: ${data.fullName}
العمر: ${data.age}
البريد الإلكتروني: ${data.email}
رقم الهاتف: ${data.phone}
المستوى: ${data.level}
اللغة: ${data.language}
نوع الاشتراك: ${data.classType}
معلومات بطاقة الدفع: بطاقة تم تقديمها
      `;

      // Send the message via WhatsApp
      sendWhatsAppMessage(whatsappAdminNumber, message);

      toast({
        title: "تم إرسال طلب التسجيل بنجاح",
        description: "سنتواصل معك قريبًا لتأكيد التسجيل",
      });

      // Redirect to thank you page or home page
      navigate("/");
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "يرجى المحاولة مرة أخرى",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="rtl text-2xl font-bold text-center">
          سجل الآن
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 rtl">
            {/* Personal Information Section */}
            <h3 className="text-xl font-semibold mb-4">المعلومات الشخصية</h3>
            
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الاسم الكامل</FormLabel>
                  <FormControl>
                    <Input placeholder="الاسم و النسب" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>العمر</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="العمر" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>البريد الإلكتروني</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="البريد الإلكتروني"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الهاتف</FormLabel>
                  <FormControl>
                    <Input placeholder="الهاتف" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Course Information Section */}
            <div className="border-t pt-6 mt-6">
              <h3 className="text-xl font-semibold mb-4">معلومات الدورة</h3>
            </div>

            <FormField
              control={form.control}
              name="level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>حدد المستوى</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر المستوى" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="beginner">مبتدئ</SelectItem>
                      <SelectItem value="intermediate">متوسط</SelectItem>
                      <SelectItem value="advanced">متقدم</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>حدد اللغة</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر اللغة" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {languages.map((language) => (
                        <SelectItem key={language.id} value={language.id}>
                          {language.name} {language.flag}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="classType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>حدد اشتراكك</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر نوع الاشتراك" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="individual">فردي</SelectItem>
                      <SelectItem value="group">جماعي</SelectItem>
                      <SelectItem value="online">عبر الإنترنت</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Payment Information Section */}
            <div className="border-t pt-6 mt-6">
              <h3 className="text-xl font-semibold mb-4">معلومات الدفع</h3>
            </div>

            <FormField
              control={form.control}
              name="cardName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>اسم حامل البطاقة</FormLabel>
                  <FormControl>
                    <Input placeholder="الاسم على البطاقة" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>رقم البطاقة</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="0000 0000 0000 0000" 
                      {...field}
                      onChange={(e) => {
                        // Format card number with spaces for readability
                        const value = e.target.value.replace(/\s/g, '');
                        const formattedValue = value.replace(/(\d{4})/g, '$1 ').trim();
                        field.onChange(formattedValue);
                      }}
                      maxLength={19}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="cardExpiry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>تاريخ الانتهاء</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="MM/YY" 
                        {...field}
                        onChange={(e) => {
                          // Format expiry date as MM/YY
                          let value = e.target.value.replace(/[^0-9]/g, '');
                          if (value.length > 2) {
                            value = value.slice(0, 2) + '/' + value.slice(2, 4);
                          }
                          field.onChange(value);
                        }}
                        maxLength={5}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cardCvc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>رمز الأمان CVC</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="000" 
                        {...field}
                        type="password"
                        maxLength={4}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="saveCardInfo"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-x-reverse space-y-0 mt-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>حفظ معلومات البطاقة للتسجيل المستقبلي</FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-academy-green hover:bg-opacity-90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "جاري التسجيل..." : "إرسال طلب التسجيل"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegistrationForm;
