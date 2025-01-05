'use client';

import { Button } from '@/components/ui/button';
import { border } from '@/lib/style';
import { cn } from '@/lib/utils';
import { Treatment } from '@/types/treatments ';
import { useState } from 'react';

export default function Page() {
  // getTreatment()を初期値として、stateの更新はsetTreatment()で行う

  const [treatment, setTreatment] = useState(getTreatment());
  const createdAt = new Date(treatment.created_at || '');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 py-8">
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold">{treatment.label}</h1>
        <p>症状発生日時: {createdAt.toISOString()}</p>
      </div>

      <section className="p-4 flex flex-col items-center">
        <h2 className="text-lg bg-muted p-4 font-bold">処置状況</h2>
        <ul className="grid grid-cols-2 p-4 gap-4">
          {treatment.procedures.map((p, index) => {
            const startedAt = p.started_at ? new Date(p.started_at) : null;
            const finishedAt = p.finished_at ? new Date(p.finished_at) : null;

            return (
              <li
                key={index}
                className={cn(
                  'border border-gray-500 rounded-lg',
                  !startedAt && !finishedAt && 'bg-white',
                  startedAt && !finishedAt && 'bg-red-100',
                  startedAt && finishedAt && 'bg-gray-200',
                )}
              >
                <div className="p-2">
                  <span className={cn('p-1', border(p.department))}>{p.department}</span>
                  <p className="truncate">{p.details}</p>
                </div>
                <hr className="border-gray-500" />
                {!p.started_at && (
                  <div className="flex flex-col justify-center items-center p-4 space-y-2">
                    <Button
                      variant={'destructive'}
                      onClick={() => {
                        const p = treatment.procedures.find((p) => p.details === p.details);
                        if (p) {
                          p.started_at = new Date().toISOString();
                          // pを更新したものを新しい配列にしてsetTreatmentする
                          setTreatment({
                            ...treatment,
                            procedures: treatment.procedures.map((proc) =>
                              proc.details === p.details ? p : proc,
                            ),
                          });
                        }
                      }}
                    >
                      開始
                    </Button>
                  </div>
                )}
                {p.started_at && !p.finished_at && (
                  <div className="flex flex-col justify-center items-center p-4 space-y-2">
                    <p className="border-b-2 p-2">3分20秒後に開始済み</p>
                    <Button>終了</Button>
                  </div>
                )}
                {p.started_at && p.finished_at && (
                  <div className="flex flex-col justify-center items-center p-4 space-y-2">
                    <p className="border-b-2 p-2">3分20秒後に開始済み</p>
                    <p className="border-b-2 p-2">4分27秒後に終了済み</p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="p-4 flex flex-col items-center">
        <h2 className="text-lg bg-muted p-4 font-bold">処置履歴</h2>
        <ul className="flex flex-col space-y-2">
          {histories.map((history, index) => (
            <li key={index} className="">
              <div className="flex items-center">
                <p>{history.time}</p>
                <p className={cn('inline p-1', border(history.department))}>{history.department}</p>
              </div>
              <div className="flex justify-between items-center">
                <p>{history.details}</p>
                <p className="bg-muted p-2">{history.action}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

const getTreatment = (): Treatment => {
  return {
    created_at: '2025-01-05T10:10:36',
    id: '1234',
    label: '死戦期帝王切開-1234',
    procedures: [
      {
        department: '産科',
        details: '帝王切開の決断と実施、迅速な準備および娩出後の子宮管理。',
        started_at: '2025-01-05T10:12:16',
        finished_at: '2025-01-05T10:12:18',
      },
      {
        department: '産科',
        details: '大出血や弛緩出血への対応、子宮収縮薬の投与や必要に応じた外科的処置。',
      },
      {
        department: '産科',
        details: '他診療科との連携指示、術野確保や輸血依頼などの要請。',
      },
      {
        department: '麻酔科',
        details: '気道管理、気管挿管や酸素化・換気のサポート。',
        started_at: '2025-01-05T10:12:21',
      },
      {
        department: '麻酔科',
        details: '循環管理と蘇生リード、薬剤投与や血圧・脈拍のモニタリング。',
      },
      {
        department: '麻酔科',
        details: '必要に応じた麻酔または鎮痛管理。',
      },
      {
        department: '救急科',
        details: '心肺停止時のBLS/ACLS開始、バイタルサインや除細動の管理。',
        started_at: '2025-01-05T10:13:06',
      },
      {
        department: '救急科',
        details: '緊急呼集の実施とチーム医療のコーディネート。',
      },
      {
        department: '救急科',
        details: '母体の外傷やその他の致命的損傷の確認と対応。',
      },
      {
        department: '新生児科',
        details: '新生児蘇生の実施、体温保持と気道確保。',
        started_at: '2025-01-05T10:12:45',
      },
      {
        department: '新生児科',
        details: '低酸素や未熟性への対応、NICUでの集中管理。',
      },
      {
        department: '輸血部',
        details: '迅速な血液製剤の準備、赤血球製剤や新鮮凍結血漿などの供給。',
      },
      {
        department: '輸血部',
        details: '血算、凝固機能、血液型クロスマッチ検査の迅速実施。',
      },
      {
        department: '集中治療科',
        details: 'ECMOやPCPSの適応評価と導入。',
      },
      {
        department: '集中治療科',
        details: '心機能管理と薬剤調整、昇圧薬や強心薬の投与。',
      },
      {
        department: '集中治療科',
        details: '術後の集中ケアと母体のバイタル安定化管理。',
      },
      {
        department: '看護部',
        details: '緊急手術室の準備と器材のセッティング。',
      },
      {
        department: '看護部',
        details: '心肺蘇生の補助、薬剤準備やルート確保の支援。',
      },
      {
        department: '看護部',
        details: '患者家族への説明と精神的サポート。',
      },
      {
        department: '薬剤部',
        details: '救急薬剤（アドレナリン、オキシトシンなど）の迅速供給と管理。',
      },
    ],
    symptom: '死戦期帝王切開',
    treatment_finished_at: '2021-08-02',
    treatment_started_at: '2021-08-01',
  };
};

const histories = [
  {
    time: '1分12秒後',
    department: '産科',
    details: '帝王切開の決断と実施、迅速な準備',
    action: '開始',
  },
  {
    time: '1分52秒後',
    department: '麻酔科',
    details: '気道管理、気管挿管や酸素化・換気のサポート。',
    action: '開始',
  },
  {
    time: '2分10秒後',
    department: '救急科',
    details: '心肺停止時のBLS/ACLS開始、バイタルサインや除細動の管理。',
    action: '開始',
  },
  {
    time: '2分15秒後',
    department: '新生児科',
    details: '低酸素や未熟性への対応、NICUでの集中管理。',
    action: '開始',
  },
  {
    time: '2分34秒後',
    department: '産科',
    details: '帝王切開の決断と実施、迅速な準備',
    action: '終了',
  },
];
