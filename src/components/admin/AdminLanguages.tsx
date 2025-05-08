
import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash } from "lucide-react";
import { languages } from "@/data/languages";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";

interface LanguageFormValues {
  name: string;
  nativeName: string;
  flag: string;
}

const AdminLanguages = () => {
  const [isAddSheetOpen, setIsAddSheetOpen] = useState(false);
  
  const form = useForm<LanguageFormValues>({
    defaultValues: {
      name: "",
      nativeName: "",
      flag: ""
    }
  });
  
  const onSubmit = (data: LanguageFormValues) => {
    console.log("New language data:", data);
    // Here you would add the language to your data store
    setIsAddSheetOpen(false);
    form.reset();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">إدارة اللغات</h1>
        <Sheet open={isAddSheetOpen} onOpenChange={setIsAddSheetOpen}>
          <SheetTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              إضافة لغة جديدة
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-right">إضافة لغة جديدة</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>اسم اللغة بالعربية</FormLabel>
                        <FormControl>
                          <Input placeholder="مثال: الإنجليزية" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="nativeName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>اسم اللغة الأصلي</FormLabel>
                        <FormControl>
                          <Input placeholder="مثال: English" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="flag"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>رمز العلم</FormLabel>
                        <FormControl>
                          <Input placeholder="مثال: 🇬🇧" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-end space-x-2">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setIsAddSheetOpen(false)}
                      className="ml-2"
                    >
                      إلغاء
                    </Button>
                    <Button type="submit">حفظ</Button>
                  </div>
                </form>
              </Form>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>قائمة اللغات</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>العلم</TableHead>
                <TableHead>اسم اللغة</TableHead>
                <TableHead>الاسم الأصلي</TableHead>
                <TableHead className="w-[100px]">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {languages.map((language) => (
                <TableRow key={language.id}>
                  <TableCell>{language.flag}</TableCell>
                  <TableCell>{language.name}</TableCell>
                  <TableCell>{language.nativeName}</TableCell>
                  <TableCell className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">تعديل</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash className="h-4 w-4" />
                      <span className="sr-only">حذف</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLanguages;
