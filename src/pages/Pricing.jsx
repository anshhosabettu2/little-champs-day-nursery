import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small nurseries getting started.",

    price: "₹999",
    period: "/ month",

    features: [
      "Up to 50 Students",
      "Student Management",
      "Teacher Management",
      "Attendance Tracking",
      "Basic Reports",
      "Email Support",
    ],

    color: "lavender",
  },

  {
    name: "Growth",
    description: "For growing nurseries with more students and staff.",

    price: "₹1,999",
    period: "/ month",

    features: [
      "Up to 150 Students",
      "Everything in Starter",
      "Fee Management",
      "Admission Management",
      "Advanced Reports",
      "Parent Communication",
      "Priority Support",
    ],

    popular: true,
    color: "yellow",
  },

  {
    name: "Enterprise",
    description: "Designed for multiple nursery branches and franchises.",

    price: "₹3,999",
    period: "/ month",

    features: [
      "Unlimited Students",
      "Everything in Growth",
      "Multiple Branches",
      "Franchise Management",
      "Advanced Analytics",
      "Centralized Dashboard",
      "Dedicated Support",
    ],

    color: "peach",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#26352D]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative overflow-hidden px-6 py-20">

        {/* Decorative Circles */}
        <div className="absolute -left-20 top-20 h-48 w-48 rounded-full bg-[#F6C85F]/20" />

        <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#A9A3D6]/20" />

        <div className="relative mx-auto max-w-6xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mx-auto max-w-3xl text-center"
          >

            {/* Label */}
            <span className="inline-block rounded-full bg-[#F0EEFA] px-4 py-2 text-sm font-semibold text-[#6C63A8]">
              KIDSNEST PRICING
            </span>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-bold leading-tight text-[#26352D] md:text-5xl">

              Simple Plans for

              <span className="block text-[#6C63A8]">
                Growing Nurseries
              </span>

            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Choose a plan that fits your nursery today and
              upgrade as your school grows.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          PRICING CARDS
      ===================================================== */}
      <section className="px-6 pb-20">

        <div className="mx-auto grid max-w-6xl items-stretch gap-7 md:grid-cols-3">

          {plans.map((plan, index) => (

            <motion.div
              key={plan.name}

              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.15,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}

              whileHover={{
                y: -6,
              }}

              className={`relative flex flex-col overflow-visible rounded-3xl bg-white p-8 shadow-sm transition-shadow hover:shadow-xl ${
                plan.popular
                  ? "border-2 border-[#6C63A8]"
                  : "border border-[#EEEAE2]"
              }`}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">

                  <span className="rounded-full bg-[#6C63A8] px-5 py-2 text-xs font-semibold text-white shadow-md">
                    Most Popular
                  </span>

                </div>
              )}


              {/* Plan Icon */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${
                  plan.color === "lavender"
                    ? "bg-[#F0EEFA]"
                    : plan.color === "yellow"
                    ? "bg-[#FFF8D9]"
                    : "bg-[#FFF4E9]"
                }`}
              >

                {plan.color === "lavender" && "🌱"}

                {plan.color === "yellow" && "⭐"}

                {plan.color === "peach" && "🏫"}

              </div>


              {/* Plan Name */}
              <h2 className="mt-6 text-2xl font-bold text-[#26352D]">
                {plan.name}
              </h2>


              {/* Description */}
              <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
                {plan.description}
              </p>


              {/* Price */}
              <div className="mt-7 flex items-end gap-1">

                <span className="text-4xl font-bold text-[#26352D]">
                  {plan.price}
                </span>

                <span className="mb-1 text-sm text-gray-500">
                  {plan.period}
                </span>

              </div>


              {/* Button */}
              <Link
                to="/book-demo"
                className={`mt-7 block rounded-xl py-3.5 text-center text-sm font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#6C63A8] text-white shadow-md shadow-[#6C63A8]/20 hover:-translate-y-0.5 hover:bg-[#514A8A]"
                    : "bg-[#F0EEFA] text-[#6C63A8] hover:bg-[#E5E1F4]"
                }`}
              >
                Get Started →
              </Link>


              {/* Divider */}
              <div className="my-7 border-t border-gray-100" />


              {/* Features */}
              <div className="flex-1">

                <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  What's Included
                </p>

                <div className="space-y-4">

                  {plan.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-start gap-3"
                    >

                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F0EEFA] text-xs font-bold text-[#6C63A8]">
                        ✓
                      </span>

                      <span className="text-sm leading-5 text-gray-600">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>


      {/* =====================================================
          COMPARE / INFO SECTION
      ===================================================== */}
      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.6,
            }}

            className="mx-auto mb-12 max-w-2xl text-center"
          >

            <span className="text-sm font-semibold uppercase tracking-wider text-[#F4A261]">
              WHY CHOOSE KIDSNEST
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#26352D] md:text-4xl">
              Everything Your Nursery Needs
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Start small, grow comfortably, and manage your nursery
              without unnecessary complexity.
            </p>

          </motion.div>


          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: "✨",
                title: "Simple",
                text: "Easy-to-use tools for your entire nursery team.",
                bg: "bg-[#F0EEFA]",
              },

              {
                icon: "⚡",
                title: "Efficient",
                text: "Save time by managing everything in one place.",
                bg: "bg-[#FFF8D9]",
              },

              {
                icon: "🔒",
                title: "Organized",
                text: "Keep important nursery information structured.",
                bg: "bg-[#FFF4E9]",
              },

              {
                icon: "📱",
                title: "Accessible",
                text: "Access your nursery information across devices.",
                bg: "bg-[#F0EEFA]",
              },
            ].map((item) => (

              <motion.div
                key={item.title}

                initial={{
                  opacity: 0,
                  y: 25,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                whileHover={{
                  y: -6,
                }}

                className="rounded-3xl border border-[#E7E3F5] bg-[#FFFDF8] p-7 text-center shadow-sm transition-shadow hover:shadow-lg"
              >

                <div
                  className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${item.bg}`}
                >
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#26352D]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[#FFFDF8] px-6 pb-20 pt-20">

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}

          whileInView={{
            opacity: 1,
            scale: 1,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.6,
          }}

          className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#EDEAF8] px-8 py-16 text-center"
        >

          {/* Decorative Circles */}
          <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#F6C85F]/20" />

          <div className="absolute -bottom-20 -right-10 h-48 w-48 rounded-full bg-[#F4A261]/15" />


          <div className="relative">

            {/* Yellow Accent */}
            <div className="mx-auto mb-5 h-2 w-16 rounded-full bg-[#F6C85F]" />


            {/* Label */}
            <span className="inline-block rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-[#6C63A8]">
              🌱 GROW WITH KIDSNEST
            </span>


            {/* Heading */}
            <h2 className="mt-5 text-3xl font-bold text-[#26352D] md:text-4xl">
              Not Sure Which Plan Is Right?
            </h2>


            {/* Description */}
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              Book a personalized demo and discover how KidsNest
              can simplify your nursery management.
            </p>


            {/* Button */}
            <Link
              to="/book-demo"
              className="mt-8 inline-flex rounded-xl bg-[#6C63A8] px-8 py-3.5 font-semibold text-white shadow-md shadow-[#6C63A8]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#514A8A]"
            >
              Book a Demo →
            </Link>

          </div>

        </motion.div>

      </section>

    </div>
  );
};

export default Pricing;

