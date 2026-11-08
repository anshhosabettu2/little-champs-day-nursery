import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    icon: "🏫",
    title: "Franchise Management",
    description:
      "Manage multiple nursery branches from one central platform.",
  },
  {
    icon: "👶",
    title: "Student Management",
    description:
      "Manage student profiles, parent details, classes, and documents.",
  },
  {
    icon: "📝",
    title: "Admission Management",
    description:
      "Handle admission applications, documents, approvals, and enrollment.",
  },
  {
    icon: "👩‍🏫",
    title: "Teacher Management",
    description:
      "Manage teachers, staff, class assignments, and responsibilities.",
  },
  {
    icon: "📚",
    title: "Class Management",
    description:
      "Create classes, sections, timetables, and manage classroom activities.",
  },
  {
    icon: "📅",
    title: "Attendance",
    description:
      "Track student and staff attendance with simple daily records.",
  },
  {
    icon: "💰",
    title: "Fees Management",
    description:
      "Manage fee structures, payments, pending fees, and receipts.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Parent Management",
    description:
      "Keep parent information and child-related details organized.",
  },
  {
    icon: "📢",
    title: "Communication",
    description:
      "Send announcements, reminders, notices, and important updates.",
  },
  {
    icon: "🚌",
    title: "Transport Management",
    description:
      "Manage buses, routes, drivers, and student pickup locations.",
  },
  {
    icon: "🎨",
    title: "Activities & Events",
    description:
      "Plan school activities, celebrations, events, and special programs.",
  },
  {
    icon: "📊",
    title: "Reports & Analytics",
    description:
      "View reports for students, admissions, attendance, fees, and branches.",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#26352D]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden px-6 py-20">

        {/* Decorative Circles */}
        <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-[#F6C85F]/20" />

        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#A9A3D6]/20" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-3xl text-center"
        >

          <span className="inline-block rounded-full bg-[#F0EEFA] px-4 py-2 text-sm font-semibold text-[#6C63A8]">
            OUR SERVICES
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-[#26352D] md:text-5xl">

            Everything You Need to

            <span className="block text-[#6C63A8]">
              Manage Your Nursery
            </span>

          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Simple and smart solutions to manage your nursery,
            students, teachers, parents and multiple branches.
          </p>

        </motion.div>

      </section>

      {/* =====================================================
          SERVICES CARDS
      ===================================================== */}
      <section className="px-6 pb-20">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
              className="group rounded-3xl border border-[#E7E3F5] bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl"
            >

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0EEFA] text-2xl transition-all duration-300 group-hover:bg-[#6C63A8] group-hover:scale-105">
                {service.icon}
              </div>

              {/* Title */}
              <h2 className="mt-6 text-xl font-bold text-[#26352D]">
                {service.title}
              </h2>

              {/* Description */}
              <p className="mt-3 text-sm leading-7 text-gray-600">
                {service.description}
              </p>

              {/* Learn More */}
              <button
                onClick={() => navigate("/services")}
                className="mt-5 font-semibold text-[#6C63A8] transition-colors hover:text-[#F4A261]"
              >
                Learn More →
              </button>

            </motion.div>

          ))}

        </motion.div>

      </section>

     {/* =====================================================
    CTA
===================================================== */}
<section className="px-6 pb-20">

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

    {/* Decorative Shapes */}
    <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#F6C85F]/20" />

    <div className="absolute -bottom-20 -right-10 h-48 w-48 rounded-full bg-[#F4A261]/15" />

    <div className="relative">

      {/* Accent */}
      <div className="mx-auto mb-5 h-2 w-16 rounded-full bg-[#F6C85F]" />

      <h2 className="text-3xl font-bold text-[#26352D] md:text-4xl">
        Manage Your Nursery Smarter
      </h2>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
        Bring all your nursery operations together in one simple
        management system.
      </p>

      <button
        onClick={() => navigate("/login")}
        className="mt-7 rounded-xl bg-[#6C63A8] px-7 py-3.5 font-semibold text-white shadow-md shadow-[#6C63A8]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#514A8A]"
      >
        Get Started →
      </button>

    </div>

  </motion.div>

</section>
    </div>
  );
};

export default Services;

