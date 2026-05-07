import { ArrowLeft, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-border bg-card overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="relative z-10 px-6 py-16 text-center sm:px-12 lg:px-20 lg:py-24">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2">
              <Sparkles className="h-4 w-4 text-foreground" />
              <span className="text-sm text-muted-foreground">
                مجاني للاستخدام
              </span>
            </div>

            {/* Headline */}
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              ابدأ بتوفير المال
              <br />
              <span className="gradient-text">اليوم</span>
            </h2>

            {/* Description */}
            <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
              انضم إلى آلاف المستخدمين الذين يوفرون المال يومياً باستخدام منصة
              Beylens للمقارنة الذكية
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="flex items-center gap-2 rounded-xl bg-foreground px-8 py-4 font-medium text-background transition-all hover:bg-foreground/90 hover:scale-105">
                <span>ابدأ المقارنة مجاناً</span>
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button className="rounded-xl border border-border px-8 py-4 font-medium text-foreground transition-all hover:bg-muted">
                تعرف على المزيد
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">بدون تسجيل</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">مجاني 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">خصوصية تامة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
