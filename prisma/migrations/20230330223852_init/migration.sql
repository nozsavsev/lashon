-- CreateTable
CREATE TABLE "Word" (
    "id" SERIAL NOT NULL,
    "word" TEXT NOT NULL,
    "root" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "modifier" TEXT NOT NULL,
    "meaning" TEXT[],

    CONSTRAINT "Word_pkey" PRIMARY KEY ("id")
);
