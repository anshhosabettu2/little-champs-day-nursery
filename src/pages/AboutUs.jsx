import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AboutUs = () => {
  const navigate = useNavigate();

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

          <div className="grid items-center gap-12 md:grid-cols-2">

            {/* Left Content */}
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              <span className="inline-block rounded-full bg-[#F0EEFA] px-4 py-2 text-sm font-semibold text-[#6C63A8]">
                ABOUT KIDSNEST
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight text-[#26352D] md:text-5xl">

                Making Nursery

                <span className="block text-[#6C63A8]">
                  Management Simple
                </span>

              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our nursery management platform helps schools and
                franchise owners manage their everyday operations
                from one simple and organized system.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                From student admissions and attendance to fees,
                teachers, parents, and multiple branches, everything
                can be managed in one place.
              </p>

              <button
                onClick={() => navigate("/services")}
                className="mt-7 rounded-xl bg-[#6C63A8] px-6 py-3 font-semibold text-white shadow-lg shadow-[#6C63A8]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#514A8A]"
              >
                Explore Our Services →
              </button>

            </motion.div>

            {/* Right Illustration */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative"
            >

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-[2rem] bg-[#F0EEFA] p-8"
              >

                <div className="rounded-3xl bg-white p-8 shadow-xl">

                  {/* Dashboard Header */}
                  <div className="mb-6 flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF8D9] text-3xl">
                      🌟
                    </div>

                    <div>
                      <h3 className="font-bold text-[#26352D]">
                        KidsNest
                      </h3>

                      <p className="text-sm text-gray-500">
                        Everything in one place
                      </p>
                    </div>

                  </div>

                  {/* Dashboard Cards */}
                  <div className="grid grid-cols-2 gap-4">

                    {/* Students */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="rounded-2xl bg-[#F0EEFA] p-5"
                    >
                      <div className="text-2xl">
                        👶
                      </div>

                      <p className="mt-2 text-sm font-semibold text-gray-700">
                        Students
                      </p>

                      <p className="mt-1 text-2xl font-bold text-[#6C63A8]">
                        500+
                      </p>
                    </motion.div>

                    {/* Teachers */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="rounded-2xl bg-[#FFF4E9] p-5"
                    >
                      <div className="text-2xl">
                        👩‍🏫
                      </div>

                      <p className="mt-2 text-sm font-semibold text-gray-700">
                        Teachers
                      </p>

                      <p className="mt-1 text-2xl font-bold text-[#F4A261]">
                        50+
                      </p>
                    </motion.div>

                    {/* Branches */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="rounded-2xl bg-[#FFF8D9] p-5"
                    >
                      <div className="text-2xl">
                        🏫
                      </div>

                      <p className="mt-2 text-sm font-semibold text-gray-700">
                        Branches
                      </p>

                      <p className="mt-1 text-2xl font-bold text-[#D9A929]">
                        10+
                      </p>
                    </motion.div>

                    {/* Parents */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="rounded-2xl bg-[#F0EEFA] p-5"
                    >
                      <div className="text-2xl">
                        ❤️
                      </div>

                      <p className="mt-2 text-sm font-semibold text-gray-700">
                        Parents
                      </p>

                      <p className="mt-1 text-2xl font-bold text-[#6C63A8]">
                        400+
                      </p>
                    </motion.div>

                  </div>

                </div>

              </motion.div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          MISSION / VISION / VALUES
      ===================================================== */}
      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="grid gap-8 md:grid-cols-3"
          >

            {/* Mission */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-[#F0EEFA] p-8 transition-shadow hover:shadow-lg"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                🎯
              </div>

              <h2 className="mt-6 text-2xl font-bold text-[#26352D]">
                Our Mission
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                To make nursery management easier, faster, and
                more organized for administrators, teachers,
                parents, and franchise owners.
              </p>

            </motion.div>

            {/* Vision */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-[#FFF8D9] p-8 transition-shadow hover:shadow-lg"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                🌱
              </div>

              <h2 className="mt-6 text-2xl font-bold text-[#26352D]">
                Our Vision
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                To create a connected nursery ecosystem where
                technology helps schools focus more on children's
                learning and development.
              </p>

            </motion.div>

            {/* Values */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-[#FFF4E9] p-8 transition-shadow hover:shadow-lg"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                💛
              </div>

              <h2 className="mt-6 text-2xl font-bold text-[#26352D]">
                Our Values
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We believe in simplicity, transparency, collaboration,
                and creating technology that is easy for everyone to use.
              </p>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          WHY KIDSNEST
      ===================================================== */}
      <section className="bg-[#FFF9F0] px-6 py-20">

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
              WHY KIDSNEST
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#26352D] md:text-4xl">
              Built for Modern Nursery Management
            </h2>

            <p className="mt-4 text-gray-600">
              Everything you need to manage your nursery efficiently,
              without complicated software.
            </p>

          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >

            {[
              {
                icon: "✨",
                title: "Simple",
                text: "Easy-to-use interface for everyone.",
              },
              {
                icon: "⚡",
                title: "Efficient",
                text: "Save time by managing everything in one place.",
              },
              {
                icon: "🔒",
                title: "Secure",
                text: "Keep important nursery information organized.",
              },
              {
                icon: "📱",
                title: "Responsive",
                text: "Access your system across different devices.",
              },
            ].map((item) => (

              <motion.div
                key={item.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 25,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-[#E7E3F5] bg-white p-7 text-center shadow-sm transition-shadow hover:shadow-lg"
              >

                <div className="text-3xl">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-xl font-bold text-[#26352D]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
     <section className="bg-[#FFFDF8] px-6 pb-20">
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

      {/* Small Label */}
      <span className="inline-block rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-[#6C63A8]">
        🌱 GROW WITH KIDSNEST
      </span>

      {/* Heading */}
      <h2 className="mt-5 text-3xl font-bold text-[#26352D] md:text-4xl">
        Ready to Simplify Your Nursery?
      </h2>

      {/* Description */}
      <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
        Bring students, teachers, parents, branches, and daily
        operations together in one simple platform.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/login")}
        className="mt-8 rounded-xl bg-[#6C63A8] px-8 py-3.5 font-semibold text-white shadow-md shadow-[#6C63A8]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#514A8A]"
      >
        Get Started →
      </button>
    </div>
  </motion.div>
</section>
    </div>
  );
};

export default AboutUs;

