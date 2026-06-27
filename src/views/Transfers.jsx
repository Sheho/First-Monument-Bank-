import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { ArrowRightLeft } from "lucide-react";

export function Transfers() {
  const handleTransfer = (e) => {
    e.preventDefault();
    alert("Transfer initiated securely!");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Transfer Funds</h1>
        <p className="text-[var(--color-bank-text-muted)]">Move money between your First Monument Bank accounts or send to external recipients instantly.</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[var(--color-bank-primary)]/20 rounded-lg">
              <ArrowRightLeft className="w-5 h-5 text-[var(--color-bank-primary)]" />
            </div>
            <div>
              <CardTitle>Make a Transfer</CardTitle>
              <CardDescription>Zero fees for internal transfers.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleTransfer} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">From Account</label>
                <select className="flex h-11 w-full rounded-xl border border-[var(--color-bank-border)] bg-[rgba(255,255,255,0.03)] px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bank-primary)] transition-all">
                  <option value="checking" className="">First Monument Bank Checking (...4920) - $8,450.25</option>
                  <option value="savings" className="">High-Yield Savings (...1104) - $34,399.75</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">To Account</label>
                <select className="flex h-11 w-full rounded-xl border border-[var(--color-bank-border)] bg-[rgba(255,255,255,0.03)] px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bank-primary)] transition-all">
                  <option value="savings" className="">High-Yield Savings (...1104)</option>
                  <option value="checking" className="">First Monument Bank Checking (...4920)</option>
                  <option value="external" className="">External Account / New Payee</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-bank-text-muted)]">$</span>
                <Input type="number" placeholder="0.00" className="pl-8 text-base md:text-lg font-medium" required min="1" step="0.01" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Memo (Optional)</label>
              <Input placeholder="What's this for?" />
            </div>

            <Button type="submit" className=" text-base">Review Transfer</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
