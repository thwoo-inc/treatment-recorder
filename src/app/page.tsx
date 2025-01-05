import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  // const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <h1 className="text-2xl my-8">治療記録デモ</h1>
      <section className="rounded-lg border-gray-500 p-4 border-2">
        <h2 className="text-lg my-4">進行中の治療</h2>
        <Card className="p-4 bg-muted flex flex-col">
          <Link href="/treatments/1234">
            <p className="text-xl font-bold">ID: 死戦期帝王切開-1234</p>
          </Link>
        </Card>
      </section>
      {/* <button
        onClick={() => setShowDialog(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
      >
        +
      </button>
      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow">
            <h2>登録フォーム</h2>
            <button className="mt-4" onClick={() => setShowDialog(false)}>
              閉じる
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}
