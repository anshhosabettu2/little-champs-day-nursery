import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BookDemo = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    ownerName: "",
    nurseryName: "",
    email: "",
    phone: "",
    childrenCount: "",
    demoDate: "",
    demoTime: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.ownerName.trim()) {
      newErrors.ownerName = "Please enter your name";
    }

    if (!formData.nurseryName.trim()) {
      newErrors.nurseryName = "Please enter nursery name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    }

    if (!formData.demoDate) {
      newErrors.demoDate = "Please select a date";
    }

    if (!formData.demoTime) {
      newErrors.demoTime = "Please select a time";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const demoRequest = {
      id: Date.now(),
      ...formData,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "kidsnestDemoRequest",
      JSON.stringify(demoRequest)
    );

    navigate("/demo-success");
  };

  return (
    <div className="min-h-screen bg-[#FFF9F0] px-4 py-12 md:py-16">

      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">

        <span className="inline-block rounded-full bg-[#EEE9FA] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#7563B8]">
          ✨ See KidsNest in Action
        </span>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 text-4xl font-bold text-[#18323A] md:text-5xl"
        >
          Book a Demo
        </motion.h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 md:text-base">
          Discover how KidsNest can help you manage your nursery,
          teachers, students, attendance and fees from one simple platform.
        </p>

      </div>

      {/* Main Content */}
      <div className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">

        {/* Left Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-3xl bg-[#EEE9FA] p-7 md:p-9"
        >

          <h2 className="text-2xl font-bold text-[#18323A]">
            Let's grow together 🌱
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            Get a quick walkthrough of KidsNest and see how it can
            simplify your nursery management.
          </p>

          <div className="mt-8 space-y-5">

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white">
                📊
              </div>

              <div>
                <h3 className="font-semibold text-[#18323A]">
                  Manage Everything
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Manage branches, students, teachers and daily activities.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF0E2]">
                👩‍🏫
              </div>

              <div>
                <h3 className="font-semibold text-[#18323A]">
                  Simplify Staff Management
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Keep your nursery team and classroom activities organized.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF5C7]">
                ❤️
              </div>

              <div>
                <h3 className="font-semibold text-[#18323A]">
                  Focus on What Matters
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Spend less time managing paperwork and more time with kids.
                </p>
              </div>
            </div>

          </div>

        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-3xl bg-white p-6 shadow-sm md:p-9"
        >

          <h2 className="text-2xl font-bold text-[#18323A]">
            Tell us about your nursery
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Fill in the details and we'll arrange your demo.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-7 space-y-5"
          >

            {/* Name / Nursery */}
            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Your Name *
                </label>

                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-200 bg-[#FFFCF8] px-4 py-3 text-sm outline-none transition focus:border-[#7563B8] focus:ring-2 focus:ring-[#EEE9FA]"
                />

                {errors.ownerName && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.ownerName}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Nursery Name *
                </label>

                <input
                  type="text"
                  name="nurseryName"
                  value={formData.nurseryName}
                  onChange={handleChange}
                  placeholder="Enter nursery name"
                  className="w-full rounded-xl border border-gray-200 bg-[#FFFCF8] px-4 py-3 text-sm outline-none transition focus:border-[#7563B8] focus:ring-2 focus:ring-[#EEE9FA]"
                />

                {errors.nurseryName && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.nurseryName}
                  </p>
                )}
              </div>

            </div>

            {/* Email / Phone */}
            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-200 bg-[#FFFCF8] px-4 py-3 text-sm outline-none transition focus:border-[#7563B8] focus:ring-2 focus:ring-[#EEE9FA]"
                />

                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full rounded-xl border border-gray-200 bg-[#FFFCF8] px-4 py-3 text-sm outline-none transition focus:border-[#7563B8] focus:ring-2 focus:ring-[#EEE9FA]"
                />

                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

            </div>

            {/* Children */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Number of Children
              </label>

              <select
                name="childrenCount"
                value={formData.childrenCount}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-[#FFFCF8] px-4 py-3 text-sm outline-none focus:border-[#7563B8] focus:ring-2 focus:ring-[#EEE9FA]"
              >
                <option value="">Select number</option>
                <option value="1-20">1 - 20</option>
                <option value="21-50">21 - 50</option>
                <option value="51-100">51 - 100</option>
                <option value="100+">100+</option>
              </select>
            </div>

            {/* Date / Time */}
            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Preferred Date *
                </label>

                <input
                  type="date"
                  name="demoDate"
                  value={formData.demoDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full rounded-xl border border-gray-200 bg-[#FFFCF8] px-4 py-3 text-sm outline-none focus:border-[#7563B8] focus:ring-2 focus:ring-[#EEE9FA]"
                />

                {errors.demoDate && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.demoDate}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Preferred Time *
                </label>

                <select
                  name="demoTime"
                  value={formData.demoTime}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-[#FFFCF8] px-4 py-3 text-sm outline-none focus:border-[#7563B8] focus:ring-2 focus:ring-[#EEE9FA]"
                >
                  <option value="">Select time</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                </select>

                {errors.demoTime && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.demoTime}
                  </p>
                )}
              </div>

            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                placeholder="Tell us what you'd like to know..."
                className="w-full resize-none rounded-xl border border-gray-200 bg-[#FFFCF8] px-4 py-3 text-sm outline-none focus:border-[#7563B8] focus:ring-2 focus:ring-[#EEE9FA]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[#7563B8] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#6654A8]"
            >
              Book My Demo →
            </button>

          </form>

        </motion.div>

      </div>
    </div>
  );
};

export default BookDemo;