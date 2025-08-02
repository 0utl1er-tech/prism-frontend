import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function CustomerInfoCard() {
  return (
    <Card className="shadow-soft border-0 bg-white/80 backdrop-blur-sm h-full">
      <CardHeader className="text-black rounded-t-lg">
        <CardTitle className="text-lg">顧客情報</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        {/* カテゴリ・業種 */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">大カテゴリ</label>
            <Input />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">業種</label>
            <Input />
          </div>
        </div>

        {/* 顧客名 */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">法人名</label>
          <Input className="w-full" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">顧客名</label>
          <Input className="w-full" />
        </div>

        {/* 住所 */}
        <div className="flex gap-2">
          <div className="space-y-2 flex-1">
            <label className="text-sm font-medium text-gray-700">都道府県</label>
            <Input />
          </div>
          <div className="space-y-2 flex-3">
            <label className="text-sm font-medium text-gray-700">住所</label>
            <Input />
          </div>
        </div>

        {/* 代表・携帯 */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">代表</label>
            <div className="flex gap-2">
              <Input className="flex-1" />
              <Input className="w-20" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">担当</label>
            <div className="flex gap-2">
              <Input className="flex-1" />
              <Input className="w-20" />
            </div>
          </div>
        </div>

        {/* 担当・FAX/生年月日 */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Mail</label>
            <Input placeholder="" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">FAX</label>
            <div className="flex gap-2">
              <Input className="flex-1" />
            </div>
          </div>
        </div>
        <label className="text-sm font-medium text-gray-700">メモ</label>
        <Textarea
          className="min-h-[200px] resize-none border-0 border-1 focus-visible:ring-0"
        />
      </CardContent>
    </Card>
  );
} 