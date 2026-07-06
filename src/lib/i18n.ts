export const locales = ["en", "bn"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const getDictionary = (locale: string) => {
  const isBn = locale === "bn";
  return {
    meta: {
      title: isBn
        ? "প্রহর (Prohor) - Next.js Starter Kit with Supabase"
        : "Prohor Next.js & Supabase Starter Kit",
      ogTitle: isBn ? "প্রহর Next.js স্টার্টার কিট" : "Prohor Next.js Starter Kit",
      description: isBn
        ? "প্রহর নেক্সট.জেএস স্টার্টার কিট দিয়ে আধুনিক ওয়েব অ্যাপ দ্রুত তৈরি করুন। এতে রয়েছে সুপাবেস, টেলউইন্ড সিএসএস এবং বায়োম লিন্টিং এর চমৎকার ডেভেলপার অভিজ্ঞতা।"
        : "Build modern web apps faster with Prohor Next.js Starter Kit. Features Supabase, Tailwind CSS, and Biome linting for an optimal developer experience.",
    },
    jsonLd: {
      name: isBn ? "প্রহর Next.js স্টার্টার কিট" : "Prohor Next.js Starter Kit",
      language: isBn ? "bn-BD" : "en-US",
      description: isBn
        ? "একটি দ্রুত, আধুনিক এবং নির্ভরযোগ্য Next.js স্টার্টার কিট যা Supabase, Tailwind CSS এবং Biome-এর সাথে সম্পূর্ণরূপে সজ্জিত।"
        : "A fast, modern, and reliable Next.js starter kit fully equipped with Supabase, Tailwind CSS, and Biome.",
      faq: [
        {
          question: isBn
            ? "প্রহর (Prohor) স্টার্টার কিট কী?"
            : "What is the Prohor Next.js Starter Kit?",
          answer: isBn
            ? "প্রহর হলো একটি আধুনিক এবং দ্রুতগতির Next.js স্টার্টার কিট যা Supabase ডাটাবেজ, Tailwind CSS স্টাইলিং, Biome লিন্টিং এবং GSAP এনিমেশন ফ্রেমওয়ার্কের সাথে সম্পূর্ণরূপে সজ্জিত।"
            : "Prohor is a modern and fast Next.js starter kit fully equipped with Supabase database, Tailwind CSS styling, Biome linting, and GSAP animation framework.",
        },
        {
          question: isBn
            ? "এটি দিয়ে কীভাবে কাজ শুরু করব?"
            : "How do I get started with Prohor Starter Kit?",
          answer: isBn
            ? "প্রজেক্টটি ক্লোন করে সরাসরি 'bun install' এবং 'bun run dev' কমান্ড চালুর মাধ্যমে ডেভেলপমেন্ট শুরু করা যাবে।"
            : "You can start development immediately by cloning the project and running 'bun install' followed by 'bun run dev'.",
        },
      ],
    },
    page: {
      nav: {
        home: isBn ? "হোম" : "Home",
        features: isBn ? "বৈশিষ্ট্য" : "Features",
        pricing: isBn ? "মূল্য" : "Pricing",
      },
      hero: {
        title: isBn
          ? "প্রহর নেক্সট.জেএস স্টার্টার কিট"
          : "Prohor Next.js Starter Kit",
        subtitle: isBn
          ? "একটি দ্রুত, আধুনিক এবং নির্ভরযোগ্য ডেভেলপার স্টার্টার কিট"
          : "A fast, modern, and reliable developer starter kit",
        login: isBn ? "লগইন করুন" : "Login",
      },
      stats: {
        title: isBn ? "পারফরম্যান্স এবং প্রযুক্তি" : "Performance & Technology",
        speed: {
          value: "< 2s",
          label: isBn ? "লোডিং সময়" : "Load Time",
        },
        lighthouse: {
          value: "100",
          label: isBn ? "এসইও স্কোর" : "SEO Score",
        },
        stack: {
          value: "Next.js 16",
          label: isBn ? "ফ্রেমওয়ার্ক" : "Framework",
          citationUrl: "https://nextjs.org",
        },
        db: {
          value: "Supabase",
          label: isBn ? "ডাটাবেজ" : "Database",
          citationUrl: "https://supabase.com",
        },
      },
      faq: {
        title: isBn ? "সাধারণ জিজ্ঞাসা (FAQ)" : "Frequently Asked Questions",
      },
    },
    auth: {
      login: {
        title: isBn ? "আবার স্বাগতম" : "Welcome back",
        newHere: isBn ? "এখানে নতুন?" : "New here?",
        signUpFree: isBn ? "বিনামূল্যে সাইন আপ করুন" : "Sign up for free",
        sendMagicLink: isBn ? "ম্যাজিক লিংক পাঠান" : "Send Magic Link",
        usePassword: isBn ? "পাসওয়ার্ড ব্যবহার করুন" : "Use password instead",
        or: isBn ? "অথবা" : "or",
        sso: isBn ? "এসএসও (SSO) দিয়ে লগইন করুন" : "Log in with SSO",
        termsText1: isBn
          ? "চালিয়ে যাওয়ার মাধ্যমে, আপনি আমাদের"
          : "By continuing, you agree to our",
        termsLink: isBn ? "সেবার শর্তাবলী" : "Terms of Service",
        and: isBn ? "এবং" : "and",
        privacyLink: isBn ? "গোপনীয়তা নীতি" : "Privacy Policy",
        termsText2: isBn ? "এর সাথে সম্মত হচ্ছেন।" : ".",
      },
    },
  };
};
