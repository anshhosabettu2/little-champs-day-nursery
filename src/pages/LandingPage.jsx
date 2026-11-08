import ImageSlider from "../components/ImageSlider";
import { useNavigate } from "react-router-dom";

import nursery1 from "../assets/nursery.jpg";
import nursery2 from "../assets/nursery_2.jpg";
import nursery3 from "../assets/nursery_3.jpg";
import nursery4 from "../assets/nursery_4.jpg";

import memory1 from "../assets/memory_1.jpg";
import memory2 from "../assets/memory_2.jpg";
import memory3 from "../assets/memory_3.jpg";
import memory4 from "../assets/memory_4.jpg";

import { motion } from "framer-motion";

const LandingPage = () => {
  const navigate = useNavigate();

  const nurseryImages = [
    nursery1,
    nursery2,
    nursery3,
    nursery4,
  ];

  const memoryImages = [
    memory1,
    memory2,
    memory3,
    memory4,
  ];

  const services = [
    {
      icon: "👶",
      title: "Student Management",
      description:
        "Manage student profiles, classes, documents, and parent information easily.",
    },
    {
      icon: "👩‍🏫",
      title: "Teacher Management",
      description:
        "Manage teachers, staff, responsibilities, and class assignments.",
    },
    {
      icon: "📝",
      title: "Admission Management",
      description:
        "Simplify applications, approvals, documents, and student enrollment.",
    },
    {
      icon: "📅",
      title: "Attendance",
      description:
        "Track daily student and staff attendance from one simple platform.",
    },
    {
      icon: "💰",
      title: "Fees Management",
      description:
        "Manage fee structures, payments, pending fees, receipts, and discounts.",
    },
    {
      icon: "🏫",
      title: "Franchise Management",
      description:
        "Manage multiple nursery branches from one centralized system.",
    },
  ];

  const features = [
    {
      icon: "⚡",
      title: "Simple & Fast",
      text: "Make everyday nursery management quick and easy.",
    },
    {
      icon: "📊",
      title: "Smart Reports",
      text: "Get useful insights about students, attendance, fees, and branches.",
    },
    {
      icon: "🔐",
      title: "Secure Data",
      text: "Keep important nursery information organized and protected.",
    },
    {
      icon: "📱",
      title: "Anywhere Access",
      text: "Access your nursery management system across devices.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#26352D]">

      {/* =====================================================
          IMAGE SLIDERS
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          <ImageSlider
            title="Our Nursery"
            images={nurseryImages}
            interval={5000}
          />

          <ImageSlider
            title="Happy Nursery Memories"
            images={memoryImages}
            interval={5000}
          />
        </motion.div>
      </section>

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative overflow-hidden px-6 py-16 md:py-20">

        {/* Decorative Circles */}
        <div className="absolute -left-20 top-20 h-48 w-48 rounded-full bg-[#F6C85F]/20" />

        <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#A9A3D6]/25" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <span className="inline-block rounded-full bg-[#F0EEFA] px-4 py-2 text-sm font-semibold text-[#6C63A8]">
              ✨ ONE PLATFORM FOR EVERY NURSERY
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-[#26352D] md:text-6xl">
              Manage Every Nursery.

              <span className="block text-[#6C63A8]">
                From One Platform.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Manage all your nursery branches, students, teachers,
              attendance, fees and daily operations from one simple
              management platform.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <button
                onClick={() => navigate("/login")}
                className="rounded-xl bg-[#6C63A8] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#6C63A8]/20 transition hover:-translate-y-1 hover:bg-[#514A8A]"
              >
                Get Started →
              </button>

              <button
                onClick={() => navigate("/services")}
                className="rounded-xl border border-[#A9A3D6] bg-white px-7 py-3.5 font-semibold text-[#6C63A8] transition hover:bg-[#F0EEFA]"
              >
                Explore Services
              </button>

            </div>

            {/* Statistics */}
            <div className="mt-10 flex flex-wrap gap-8">

              <div>
                <p className="text-2xl font-bold text-[#6C63A8]">
                  12+
                </p>

                <p className="text-sm text-gray-500">
                  Branches
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#6C63A8]">
                  1,200+
                </p>

                <p className="text-sm text-gray-500">
                  Students
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#6C63A8]">
                  100+
                </p>

                <p className="text-sm text-gray-500">
                  Teachers
                </p>
              </div>

            </div>

          </motion.div>

          {/* =================================================
              DASHBOARD PREVIEW
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-[2rem] bg-[#F0EEFA] p-5 md:p-8"
            >

              <div className="rounded-3xl bg-white p-6 shadow-2xl">

                {/* Dashboard Header */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF4D6] text-2xl">
                      🌟
                    </div>

                    <div>
                      <h3 className="font-bold text-[#26352D]">
                        KidsNest
                      </h3>

                      <p className="text-xs text-gray-500">
                        Admin Dashboard
                      </p>
                    </div>

                  </div>

                  <div className="flex items-center gap-2">

                    <span className="h-2.5 w-2.5 rounded-full bg-[#A9A3D6]" />

                    <span className="text-xs text-gray-500">
                      Live
                    </span>

                  </div>

                </div>

                {/* Dashboard Cards */}
                <div className="mt-7 grid grid-cols-2 gap-4">

                  {/* Branches */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-2xl bg-[#F0EEFA] p-5"
                  >

                    <span className="text-2xl">
                      🏫
                    </span>

                    <p className="mt-3 text-sm text-gray-500">
                      Branches
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-[#6C63A8]">
                      12
                    </h3>

                  </motion.div>

                  {/* Students */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-2xl bg-[#FFF4E9] p-5"
                  >

                    <span className="text-2xl">
                      👶
                    </span>

                    <p className="mt-3 text-sm text-gray-500">
                      Students
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-[#F4A261]">
                      1,248
                    </h3>

                  </motion.div>

                  {/* Attendance */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-2xl bg-[#FFF8D9] p-5"
                  >

                    <span className="text-2xl">
                      📅
                    </span>

                    <p className="mt-3 text-sm text-gray-500">
                      Attendance
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-[#D9A929]">
                      94%
                    </h3>

                  </motion.div>

                  {/* Fees */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-2xl bg-[#F0EEFA] p-5"
                  >

                    <span className="text-2xl">
                      💰
                    </span>

                    <p className="mt-3 text-sm text-gray-500">
                      Fees
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-[#6C63A8]">
                      ₹8.4L
                    </h3>

                  </motion.div>

                </div>

                {/* Monthly Overview */}
                <div className="mt-6 rounded-2xl bg-[#FAF9FC] p-5">

                  <div className="flex items-center justify-between">

                    <p className="text-sm font-semibold text-[#26352D]">
                      Monthly Overview
                    </p>

                    <span className="text-xs font-semibold text-[#6C63A8]">
                      +12%
                    </span>

                  </div>

                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-gray-200">

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "78%" }}
                      transition={{
                        duration: 1.2,
                        delay: 0.5,
                      }}
                      className="h-full rounded-full bg-[#A9A3D6]"
                    />

                  </div>

                  <div className="mt-3 flex justify-between text-xs text-gray-500">
                    <span>Operations</span>
                    <span>78% Complete</span>
                  </div>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="bg-white px-6 py-16">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-12 max-w-2xl text-center">

            <span className="text-sm font-semibold uppercase tracking-wider text-[#F4A261]">
              OUR SERVICES
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#26352D] md:text-4xl">
              Everything You Need to Manage Your Nursery
            </h2>

            <p className="mt-4 text-gray-600">
              Powerful tools designed to make nursery management
              simple, organized, and efficient.
            </p>

          </div>

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
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >

            {services.map((service) => (

              <motion.div
                key={service.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                    },
                  },
                }}
                whileHover={{
                  y: -7,
                }}
                className="rounded-3xl border border-[#E7E3F5] bg-white p-7 shadow-sm transition-shadow hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0EEFA] text-2xl">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#26352D]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {service.description}
                </p>

                <button
                  onClick={() => navigate("/services")}
                  className="mt-5 text-sm font-semibold text-[#6C63A8] transition hover:text-[#F4A261]"
                >
                  Learn More →
                </button>

              </motion.div>

            ))}

          </motion.div>

          <div className="mt-10 text-center">

            <button
              onClick={() => navigate("/services")}
              className="rounded-xl bg-[#6C63A8] px-7 py-3 font-semibold text-white transition hover:bg-[#514A8A]"
            >
              View All Services
            </button>

          </div>

        </div>
      </section>

      {/* =====================================================
          ABOUT SECTION
      ===================================================== */}
      <section className="bg-[#FFF9F0] px-6 py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          {/* About Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <span className="text-sm font-semibold uppercase tracking-wider text-[#F4A261]">
              ABOUT KIDSNEST
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#26352D] md:text-4xl">

              Making Nursery Management

              <span className="block text-[#6C63A8]">
                Simple & Organized
              </span>

            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              KidsNest brings all your nursery operations together
              in one easy-to-use platform. From student admissions
              and attendance to fees, teachers, parents, and
              franchise management.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Spend less time managing paperwork and more time
              focusing on creating a better learning environment
              for children.
            </p>

            <button
              onClick={() => navigate("/about")}
              className="mt-7 rounded-xl bg-[#6C63A8] px-6 py-3 font-semibold text-white transition hover:bg-[#514A8A]"
            >
              About KidsNest →
            </button>

          </motion.div>

          {/* Features */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >

            {features.map((feature) => (

              <motion.div
                key={feature.title}
                whileHover={{
                  y: -5,
                }}
                className="rounded-3xl border border-[#EEEAF8] bg-white p-6 shadow-sm transition hover:shadow-lg"
              >

                <div className="text-3xl">
                  {feature.icon}
                </div>

                <h3 className="mt-4 font-bold text-[#26352D]">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {feature.text}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>
      </section>

     {/* =====================================================
    CALL TO ACTION
===================================================== */}
<section className="bg-[#FFFDF8] px-6 pb-20">

  <motion.div
    initial={{
      opacity: 0,
      scale: 0.97,
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

    {/* Decorative Accent */}
    <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#F6C85F]/20" />

    <div className="absolute -bottom-20 -right-10 h-48 w-48 rounded-full bg-[#F4A261]/15" />

    <div className="relative mx-auto max-w-3xl">

      {/* Accent */}
      <div className="mx-auto mb-5 h-2 w-16 rounded-full bg-[#F6C85F]" />

      {/* Badge */}
      <span className="inline-block rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-[#6C63A8]">
        🌱 GROW WITH KIDSNEST
      </span>

      <h2 className="mt-5 text-3xl font-bold text-[#26352D] md:text-4xl">
        Ready to Simplify Your Nursery?
      </h2>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
        Manage students, teachers, parents, fees, attendance,
        and multiple branches from one simple platform.
      </p>

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

export default LandingPage;