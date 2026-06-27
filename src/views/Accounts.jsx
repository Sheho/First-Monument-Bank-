import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { ArrowDownRight, ArrowUpRight, Search, Download } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export function Accounts() {
  const transactions = [
    { id: 1, desc: "Apple Store", date: "Jun 21, 2026", amount: "-$1,299.00", type: "debit", category: "Electronics" },
    { id: 2, desc: "Salary Deposit - TechCorp Inc", date: "Jun 20, 2026", amount: "+$4,250.00", type: "credit", category: "Income" },
    { id: 3, desc: "Whole Foods Market", date: "Jun 19, 2026", amount: "-$145.20", type: "debit", category: "Groceries" },
    { id: 4, desc: "Uber Rides", date: "Jun 18, 2026", amount: "-$24.50", type: "debit", category: "Transport" },
    { id: 5, desc: "Transfer from Savings", date: "Jun 15, 2026", amount: "+$500.00", type: "credit", category: "Transfer" },
    { id: 6, desc: "Netflix Subscription", date: "Jun 15, 2026", amount: "-$15.99", type: "debit", category: "Entertainment" },
    { id: 7, desc: "Equinox Gym", date: "Jun 01, 2026", amount: "-$250.00", type: "debit", category: "Health" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Account Details</h1>
        <p className="text-[var(--color-bank-text-muted)]">View your transaction history and statements.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-[var(--color-bank-primary)]/50 bg-[var(--color-bank-primary)]/5">
          <CardContent className="p-6">
            <h3 className="font-semibold text-base md:text-lg mb-1">First Monument Bank Checking</h3>
            <p className="text-sm text-[var(--color-bank-text-muted)] mb-4">Account: 123456784920</p>
            <div className="text-2xl md:text-3xl font-bold">$8,450.25</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-base md:text-lg mb-1">High-Yield Savings</h3>
            <p className="text-sm text-[var(--color-bank-text-muted)] mb-4">Account: 987654321104</p>
            <div className="text-2xl md:text-3xl font-bold">$34,399.75</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--color-bank-border)] pb-6">
          <CardTitle>Transaction History</CardTitle>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-bank-text-muted)]" />
              <Input placeholder="Search transactions..." className="pl-9 w-full md:w-64" />
            </div>
            <Button variant="secondary" size="icon">
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-[var(--color-bank-text-muted)] uppercase bg-[rgba(255,255,255,0.02)]">
                <tr>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Description</th>
                  <th className="px-6 py-4 font-medium">Category</th>
                  <th className="px-6 py-4 font-medium text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-bank-border)]">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-[rgba(255,255,255,0.01)] transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-[var(--color-bank-text-muted)]">{tx.date}</td>
                    <td className="px-6 py-4 font-medium">
                      <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-md ${tx.type === 'credit' ? '' : 'bg-[var(--color-bank-surface)] border border-[var(--color-bank-border)]'}`}>
                          {tx.type === 'credit' ? <ArrowUpRight className="w-3 h-3 text-green-400" /> : <ArrowDownRight className="w-3 h-3 text-[var(--color-bank-text-muted)]" />}
                        </div>
                        {tx.desc}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[var(--color-bank-text-muted)]">{tx.category}</td>
                    <td className={`px-6 py-4 text-right font-semibold ${tx.type === 'credit' ? 'text-green-400' : 'text-slate-900'}`}>
                      {tx.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
