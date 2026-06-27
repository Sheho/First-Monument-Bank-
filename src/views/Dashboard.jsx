import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { ArrowUpRight, ArrowDownRight, CreditCard, Landmark, Send, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Top Level Summary */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 bg-gradient-to-br from-[rgba(59,130,246,0.1)] to-[rgba(147,51,234,0.1)] border-[var(--color-bank-primary)]/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-base md:text-lg font-medium text-[var(--color-bank-text-muted)]">Total Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-4">
              <span className="text-2xl md:text-3xl md:text-4xl md:text-5xl font-bold tracking-tight">$42,850.00</span>
              <span className="text-green-400 flex items-center font-medium mb-1">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                +2.4%
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base md:text-lg font-medium text-[var(--color-bank-text-muted)]">Quick Transfer</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
             <Button className=" justify-start" onClick={() => navigate("/transfers")}>
               <Send className="w-4 h-4 mr-3" />
               Send Money
             </Button>
             <Button variant="secondary" className=" justify-start">
               <Plus className="w-4 h-4 mr-3" />
               Add Funds
             </Button>
          </CardContent>
        </Card>
      </div>

      {/* Accounts List */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Your Accounts</h2>
          <Button variant="ghost" size="sm" onClick={() => navigate("/accounts")}>View All</Button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="group hover:border-[var(--color-bank-primary)]/50 transition-all cursor-pointer" onClick={() => navigate("/accounts")}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-[var(--color-bank-surface)] border border-[var(--color-bank-border)] group-hover:border-[var(--color-bank-primary)]/50 transition-colors">
                    <Landmark className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg">First Monument Bank Checking</h3>
                    <p className="text-sm text-[var(--color-bank-text-muted)]">...4920</p>
                  </div>
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-1">$8,450.25</div>
              <p className="text-sm text-[var(--color-bank-text-muted)]">Available Balance</p>
            </CardContent>
          </Card>

          <Card className="group hover:border-[var(--color-bank-primary)]/50 transition-all cursor-pointer" onClick={() => navigate("/accounts")}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-[var(--color-bank-surface)] border border-[var(--color-bank-border)] group-hover:border-[var(--color-bank-primary)]/50 transition-colors">
                    <Landmark className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg">High-Yield Savings</h3>
                    <p className="text-sm text-[var(--color-bank-text-muted)]">...1104</p>
                  </div>
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-1">$34,399.75</div>
              <p className="text-sm text-[var(--color-bank-text-muted)]">4.5% APY</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { title: "Apple Store", date: "Today, 2:45 PM", amount: "-$1,299.00", icon: ArrowDownRight, color: "text-red-400", bg: "" },
              { title: "Salary Deposit", date: "Yesterday, 9:00 AM", amount: "+$4,250.00", icon: ArrowUpRight, color: "text-green-400", bg: "" },
              { title: "Whole Foods Market", date: "Jun 19, 6:30 PM", amount: "-$145.20", icon: ArrowDownRight, color: "text-red-400", bg: "" },
              { title: "Spotify Subscription", date: "Jun 18, 10:00 AM", amount: "-$10.99", icon: ArrowDownRight, color: "text-red-400", bg: "" },
            ].map((tx, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${tx.bg}`}>
                    <tx.icon className={`w-5 h-5 ${tx.color}`} />
                  </div>
                  <div>
                    <p className="font-medium">{tx.title}</p>
                    <p className="text-xs text-[var(--color-bank-text-muted)]">{tx.date}</p>
                  </div>
                </div>
                <span className={`font-semibold ${tx.amount.startsWith('+') ? 'text-green-400' : 'text-slate-900'}`}>
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
