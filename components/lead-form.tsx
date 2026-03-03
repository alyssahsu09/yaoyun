"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { Sprout, Send } from "lucide-react"

const FORMSPREE_URL = "https://formspree.io/f/mnjbzene"

const demandOptions = [
  "供應鏈減碳諮詢",
  "ISO 14064/14067 導入",
  "ESG 報告書編製",
  "國際永續評比 (DJSI/CDP)",
  "數位永續轉型",
  "其他專業諮詢",
]

export function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    demand: "",
  })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.demand) {
      toast.error("請填寫必要欄位（姓名、Email、需求類型）")
      return
    }

    setSubmitting(true)

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          demand: form.demand,
          _subject: `[永續諮詢預約] ${form.demand} — ${form.name}`,
        }),
      })

      if (res.ok) {
        toast.success("已成功送出！Alyssa 將盡快與您聯繫。")
        setForm({ name: "", company: "", email: "", demand: "" })
      } else {
        toast.error("送出失敗，請稍後重試或直接寄信聯繫。")
      }
    } catch {
      toast.error("網路錯誤，請稍後重試。")
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass =
    "w-full rounded-2xl border border-border bg-white px-6 py-4 text-lg text-charcoal font-bold placeholder:text-warm-gray/40 focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal/5 transition-all shadow-sm"

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="white-card p-10 border-2 border-teal/5 shadow-2xl">
        {/* Header */}
        <div className="mb-10 flex items-center gap-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/10 shadow-inner">
            <Sprout className="h-7 w-7 text-teal" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-charcoal">
              {"永續體質預約診斷"}
            </h2>
            <p className="text-base font-bold text-charcoal/50">{"免費初步諮詢，為您的企業量身規劃"}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Name */}
          <div>
            <label htmlFor="lead-name" className="mb-3 block text-base font-black text-charcoal/80 ml-1">
              {"您的姓名 Name "}
              <span className="text-destructive">*</span>
            </label>
            <input
              id="lead-name"
              name="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="請輸入姓名"
              className={inputClass}
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="lead-company" className="mb-3 block text-base font-black text-charcoal/80 ml-1">
              {"公司名稱 / 職稱"}
            </label>
            <input
              id="lead-company"
              name="company"
              type="text"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              placeholder="請輸入公司或職稱"
              className={inputClass}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="lead-email" className="mb-3 block text-base font-black text-charcoal/80 ml-1">
              {"Email 電子郵件 "}
              <span className="text-destructive">*</span>
            </label>
            <input
              id="lead-email"
              name="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="example@company.com"
              className={inputClass}
            />
          </div>

          {/* Demand Dropdown */}
          <div>
            <label htmlFor="lead-demand" className="mb-3 block text-base font-black text-charcoal/80 ml-1">
              {"諮詢需求類型 "}
              <span className="text-destructive">*</span>
            </label>
            <select
              id="lead-demand"
              name="demand"
              value={form.demand}
              onChange={(e) => setForm({ ...form, demand: e.target.value })}
              className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236B7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25em_1.25em] bg-[right_1rem_center] bg-no-repeat`}
            >
              <option value="" disabled className="text-warm-gray/30">
                {"請選擇諮詢項目"}
              </option>
              {demandOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="group flex items-center justify-center gap-3 rounded-2xl bg-teal px-6 py-5 text-xl font-black text-white shadow-xl shadow-teal/20 transition-all duration-300 hover:bg-teal-light hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 mt-4"
          >
            {submitting ? (
              <span className="flex items-center gap-3">
                <span className="h-6 w-6 animate-spin rounded-full border-3 border-white border-t-transparent" />
                {"送出中..."}
              </span>
            ) : (
              <>
                <Send className="h-6 w-6" />
                {"送出診斷預約"}
              </>
            )}
          </button>

          <p className="text-center text-sm font-bold text-charcoal/40 leading-relaxed italic">
            {"送出後資料將加密傳送，Alyssa 會親自回覆您"}
          </p>
        </form>
      </div>
    </motion.section>
  )
}
