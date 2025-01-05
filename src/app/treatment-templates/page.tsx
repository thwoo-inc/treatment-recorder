// 'use client';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { TreatmentTemplate } from '@/types/treatment-templates';
// import { fetchTreatmentTemplates } from '@/utils/supabase';
// import { useEffect, useState } from 'react';

export default function Page() {
  // const [templates, setTemplate] = useState<TreatmentTemplate[]>([]);
  const templates = getTreatmentTemplates();

  // useEffect(() => {
  //   async function fetchTemplates() {
  //     const rowTemplates = await fetchTreatmentTemplates();
  //     if (rowTemplates === null) {
  //       console.error('data is null');
  //       return;
  //     }
  //     // 「procedures は実際には Procedure[] だよ」と断言している
  //     const templates: TreatmentTemplate[] = rowTemplates.map((t) => ({
  //       ...t,
  //       procedures: t.procedures as Procedure[],
  //     }));
  //     console.log('success: ' + templates.length);

  //     setTemplate(templates);
  //   }
  //   fetchTemplates();
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl my-8">治療テンプレート</h1>
      {templates.map((template) => (
        <Card key={template.id} className="p-4 bg-muted flex flex-col">
          <h2 className="text-lg my-4">{template.symptom}</h2>
          <ul className="space-y-2">
            {template.procedures.map((procedure, idx) => (
              <li key={idx} className="flex space-x-2">
                <p className={cn('text-sm p-1', border(procedure.department))}>
                  {procedure.department}
                </p>
                <p className="text-sm">{procedure.details}</p>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}

const getTreatmentTemplates = (): TreatmentTemplate[] => {
  return [
    {
      id: '179050c6-063e-467b-842f-6f87d29db5bd',
      symptom: '死戦期帝王切開',
      procedures: [
        { details: '帝王切開の決断と実施、迅速な準備および娩出後の子宮管理。', department: '産科' },
        {
          details: '大出血や弛緩出血への対応、子宮収縮薬の投与や必要に応じた外科的処置。',
          department: '産科',
        },
        { details: '他診療科との連携指示、術野確保や輸血依頼などの要請。', department: '産科' },
        { details: '気道管理、気管挿管や酸素化・換気のサポート。', department: '麻酔科' },
        {
          details: '循環管理と蘇生リード、薬剤投与や血圧・脈拍のモニタリング。',
          department: '麻酔科',
        },
        { details: '必要に応じた麻酔または鎮痛管理。', department: '麻酔科' },
        {
          details: '心肺停止時のBLS/ACLS開始、バイタルサインや除細動の管理。',
          department: '救急科',
        },
        { details: '緊急呼集の実施とチーム医療のコーディネート。', department: '救急科' },
        { details: '母体の外傷やその他の致命的損傷の確認と対応。', department: '救急科' },
        { details: '新生児蘇生の実施、体温保持と気道確保。', department: '新生児科' },
        { details: '低酸素や未熟性への対応、NICUでの集中管理。', department: '新生児科' },
        {
          details: '迅速な血液製剤の準備、赤血球製剤や新鮮凍結血漿などの供給。',
          department: '輸血部',
        },
        { details: '血算、凝固機能、血液型クロスマッチ検査の迅速実施。', department: '輸血部' },
        { details: 'ECMOやPCPSの適応評価と導入。', department: '集中治療科' },
        { details: '心機能管理と薬剤調整、昇圧薬や強心薬の投与。', department: '集中治療科' },
        { details: '術後の集中ケアと母体のバイタル安定化管理。', department: '集中治療科' },
        { details: '緊急手術室の準備と器材のセッティング。', department: '看護部' },
        { details: '心肺蘇生の補助、薬剤準備やルート確保の支援。', department: '看護部' },
        { details: '患者家族への説明と精神的サポート。', department: '看護部' },
        {
          details: '救急薬剤（アドレナリン、オキシトシンなど）の迅速供給と管理。',
          department: '薬剤部',
        },
      ],
      created_at: '2025-01-03T07:22:03.366884',
    },
  ];
};

const border = (department: string) => {
  switch (department) {
    case '産科':
      return 'border border-red-500';
    case '麻酔科':
      return 'border border-yellow-500';
    case '救急科':
      return 'border border-green-500';
    case '新生児科':
      return 'border border-cyan-500';
    case '輸血部':
      return 'border border-teal-500';
    case '集中治療科':
      return 'border border-blue-500';
    case '看護部':
      return 'border border-purple-500';
    case '薬剤部':
      return 'border border-pink-500';
    default:
      return 'border border-gray-500';
  }
};
