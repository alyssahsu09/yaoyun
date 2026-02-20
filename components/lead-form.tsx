"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { Sprout, Send } from "lucide-react"

const FORMSPREE_URL = "https://formspree.io/f/mnjbzene"

const demandOptions = [
  "政府補助",
  "品牌轉型",
  "永續報告書",
  "國際永續評比",
  "碳盤查/足跡",
  "BNI 1-on-1",
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
    "w-full rounded-2xl border border-border bg-beige px-5 py-3.5 text-base text-charcoal placeholder:text-warm-gray/40 focus:border-teal/30 focus:outline-none focus:ring-2 focus:ring-teal/10 transition-all"

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="white-card p-8">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal/8">
            <Sprout className="h-5 w-5 text-teal" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-charcoal">
              {"永續體質預約診斷"}
            </h2>
            <p className="text-sm text-warm-gray">{"免費初步諮詢，為您的企業量身規劃"}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name */}
          <div>
            <label htmlFor="lead-name" className="mb-2 block text-sm font-medium text-charcoal">
              {"姓名 "}
              <span className="text-gold">*</span>
            </label>
            <input
              id="lead-name"
              name="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="您的姓名"
              className={inputClass}
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="lead-company" className="mb-2 block text-sm font-medium text-charcoal">
              {"公司 / 職稱"}
            </label>
            <input
              id="lead-company"
              name="company"
              type="text"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              placeholder="公司名稱或職稱"
              className={inputClass}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="lead-email" className="mb-2 block text-sm font-medium text-charcoal">
              {"Email "}
              <span className="text-gold">*</span>
            </label>
            <input
              id="lead-email"
              name="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="your@email.com"
              className={inputClass}
            />
          </div>

          {/* Demand Dropdown */}
          <div>
            <label htmlFor="lead-demand" className="mb-2 block text-sm font-medium text-charcoal">
              {"需求類型 "}
              <span className="text-gold">*</span>
            </label>
            <select
              id="lead-demand"
              name="demand"
              value={form.demand}
              onChange={(e) => setForm({ ...form, demand: e.target.value })}
              className={`${inputClass} appearance-none`}
            >
              <option value="" disabled className="text-warm-gray/40">
                {"請選擇諮詢需求"}
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
            className="group flex items-center justify-center gap-2.5 rounded-2xl bg-gold px-5 py-4 text-base font-bold text-charcoal transition-all duration-300 hover:bg-gold-hover hover:shadow-lg hover:shadow-gold/25 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed mt-2"
          >
            {submitting ? (
              <span className="flex items-center gap-2.5">
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-charcoal border-t-transparent" />
                {"送出中..."}
              </span>
            ) : (
              <>
                <Send className="h-5 w-5" />
                {"送出預約"}
              </>
            )}
          </button>

          <p className="text-center text-xs text-warm-gray/60 leading-relaxed">
            {"送出後資料將安全傳送，Alyssa 會親自回覆您"}
          </p>
        </form>
      </div>
    </motion.section>
  )
}
