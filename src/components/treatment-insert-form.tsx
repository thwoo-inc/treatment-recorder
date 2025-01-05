'use client';

// import { zodResolver } from '@hookform/resolvers/zod';
// import { useQueryClient } from '@tanstack/react-query';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';

// import { Button } from '@/components/ui/button';
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { useDialog } from '@/contexts/DialogContext';
// import { insertTreatments } from '@/queries/insert-treatment';
// import { Tables } from '@/utils/database.types';
// import { treatmentsInsertSchema, treatmentTemplatesInsertSchema } from '@/utils/zod.types';
// import { supabase } from '@/utils/supabase';

const TreatmentInsertForm = () => {
  // const queryClient = useQueryClient();
  // const dialog = useDialog();

  // const form = useForm<z.infer<typeof treatmentTemplatesInsertSchema>>({
  //   defaultValues: {
  //     // user_id: auth.user?.session.user.id,
  //     // goal_id: goal.id,
  //     // statement: '',
  //     // prize: '',
  //   },
  //   resolver: zodResolver(treatmentsInsertSchema),
  // });

  // const onSubmit = (data: z.infer<typeof treatmentTemplatesInsertSchema>) => {
  //   insertTreatments(supabase, data).then((result) => {
  //     if (result.error) {
  //       console.error(`failed: ${result.error}`);
  //       // dialog.close(true, '登録できませんでした');
  //     } else {
  //       queryClient.invalidateQueries({ queryKey: ['goals', 'all'] });
  //       queryClient.invalidateQueries({ queryKey: ['user_goals', 'all'] });
  //       // dialog.close(true, '登録できました');
  //     }
  //   });
  // };

  return (
    <></>
    // <Form {...form}>
    //   <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-[32px] p-[32px]">
    //     <h2 className="text-center text-xl">治療記録の登録</h2>
    //     <FormField
    //       control={form.control}
    //       // name="statement"
    //       render={({ field }) => (
    //         <FormItem className="w-[480px]">
    //           <FormLabel className="text-lg font-bold">宣言</FormLabel>
    //           <FormDescription>この目標の意気込みを入力しよう。</FormDescription>
    //           <FormControl>
    //             {/* <Textarea
    //               {...field}
    //               placeholder="こんなゲームを作りたい！賞をとりたい！学校のみんなと楽しみたい！"
    //               rows={3}
    //             /> */}
    //           </FormControl>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />

    //     <Button type="submit" className="text-mywhite">
    //       治療を開始する
    //     </Button>
    //   </form>
    // </Form>
  );
};

export default TreatmentInsertForm;
