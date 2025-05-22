const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "shasankshakya2@gmail.com" },
    update: {},
    create: {
      email: "shasankshakya2@gmail.com",
      name: "Shasank",
      password: "shasank",
      role: "USER",
      profile: {
        create: {
          bio: "I am Shasank, this is my bio.",
        },
      },
    },
  });

  console.log({ user });

  const products = await prisma.product.createMany({
    data: [
      {
        title: "Lemon & Sage Body Butter",
        description: "Luxurious body butter with a zesty citrus scent.",
        category: "Body Care",
        style: "Moisturizer",
        store: "Bliss",
        size: "200ml",
        inventory: 50,
        color: "Yellow",
        price: 19,
        images:
          '["https://res.cloudinary.com/dbwjunw0f/image/upload/v1747894229/lemonsage_body_butter_csahdu.webp","https://res.cloudinary.com/dbwjunw0f/image/upload/v1747894596/Bliss-BodyButterMaximumMoistureCream_ktriji.webp","https://res.cloudinary.com/dbwjunw0f/image/upload/v1747894598/Bliss-BodyButterMaximumMoistureCream_Lemon_Sage2_cypzvi.webp" ]',
        userId: user.id,
      },
      {
        title: "Fab Foaming Exfoliating Cleanser",
        description: "2-in-1 cleanser and exfoliator with bamboo buffers.",
        category: "Skincare",
        style: "Cleanser",
        store: "Bliss",
        size: "150ml",
        inventory: 30,
        color: "Pink",
        price: 14,
        images:
          '["https://res.cloudinary.com/dbwjunw0f/image/upload/v1747894767/BLISS_BLISSPRIORITY13_FabFoaming2-in-1Cleanser1_ghwnlp.webp","https://res.cloudinary.com/dbwjunw0f/image/upload/v1747894764/BLISS_BLISSPRIORITY13_FabFoaming2-in-1Cleanser_2_th950e.webp", "https://res.cloudinary.com/dbwjunw0f/image/upload/v1747894758/BLISS_BLISSPRIORITY13_FabFoaming2-in-1Cleanser_3_xudlbg.webp"]',
        userId: user.id,
      },
      {
        title: "Clear Genius Cleanser",
        description: "Clarifying gel cleanser for oily or acne-prone skin.",
        category: "Skincare",
        style: "Cleanser",
        store: "Bliss",
        size: "150ml",
        inventory: 40,
        color: "Green",
        price: 12,
        images:
          '["https://res.cloudinary.com/dbwjunw0f/image/upload/v1747899439/Clarifying_gel_cleanser_front__1_ppszpa.webp","https://res.cloudinary.com/dbwjunw0f/image/upload/v1747899437/Bliss_ClearGeniusClarifyingGelCleans2_wcl1yp.webp"]',
        userId: user.id,
      },
      {
        title: "Drench & Quench Moisturizer",
        description: "Cream-to-water hydrator for all-day moisture.",
        category: "Skincare",
        style: "Moisturizer",
        store: "Bliss",
        size: "50ml",
        inventory: 60,
        color: "Blue",
        price: 17,
        images:
          '["https://res.cloudinary.com/dbwjunw0f/image/upload/v1710915022/wwacd2autczy5lnianhv.webp","https://res.cloudinary.com/dbwjunw0f/image/upload/v1710915022/wpmmcurrpqkxuq3jys68.webp","https://res.cloudinary.com/dbwjunw0f/image/upload/v1710915022/w0yk2nmwn2t4lawgca88.webp"]',
        userId: user.id,
      },
      {
        title:
          "Vitamin C + Tri-Peptide Collagen Protecting & Brightening Serum",
        description: "Serum designed to perfect and hydrate the skin.",
        category: "Skincare",
        style: "Serum",
        store: "Bliss",
        size: "30ml",
        inventory: 70,
        color: "Orange",
        price: 24,
        images:
          '["https://res.cloudinary.com/dbwjunw0f/image/upload/v1710919433/pakc3tjw6sy5gfgjigvg.webp","https://res.cloudinary.com/dbwjunw0f/image/upload/v1710919434/ok8owwjjmhwfytdi0dj1.webp","https://res.cloudinary.com/dbwjunw0f/image/upload/v1710919571/gnobbnegsdmsx0yqe0jo.webp"]',
        userId: user.id,
      },
      {
        title: "Makeup Melt Wipes",
        description: "Oil-free makeup remover wipes.",
        category: "Skincare",
        style: "Makeup Remover",
        store: "Bliss",
        size: "30 wipes",
        inventory: 90,
        color: "White",
        price: 7,
        images:
          '["https://res.cloudinary.com/dbwjunw0f/image/upload/v1747899556/Bliss_Rebranded_Incredi-Peel_Lifestyle1_nbaabz.webp","https://res.cloudinary.com/dbwjunw0f/image/upload/v1747899556/Bliss_Rebranded_Incredi-Peel_Lifestyle_2_ndap0e.webp"]',
        userId: user.id,
      },
    ],
  });

  console.log("Seed completed with beauty and cosmetic products");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
