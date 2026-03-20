import { useScrollReveal } from "@/hooks/useScrollReveal";

const plans = [
  { name: "5 Days Plan", price: "₹1,800", period: "/month", features: ["Mon–Fri delivery", "Choose any bowl", "Free delivery"] },
  { name: "7 Days Plan", price: "₹2,500", period: "/month", features: ["Daily delivery", "Choose any bowl", "Free delivery", "Priority support"], popular: true },
];

const benefits = [
  { icon: "💰", label: "Save Money" },
  { icon: "📦", label: "Daily Delivery" },
  { icon: "🥗", label: "Healthy Routine" },
];

const SubscriptionPlans = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="plans" className="section-padding bg-muted/40" ref={ref}>
      <div className="container-narrow">
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Subscribe & Save</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Monthly Plans</h2>
        </div>

        {/* Benefits row */}
        <div className={`flex flex-wrap justify-center gap-6 mb-10 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          {benefits.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-sm font-medium text-foreground">
              <span className="text-xl">{b.icon}</span> {b.label}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`glass-card-hover rounded-2xl p-7 relative transition-all duration-700 ${plan.popular ? "ring-2 ring-primary" : ""} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 1) * 120}ms` }}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-bold text-xl text-foreground mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-3xl font-extrabold text-primary">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="text-secondary">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#order"
                className={`block text-center font-semibold py-3 rounded-full transition-all active:scale-[0.97] ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
