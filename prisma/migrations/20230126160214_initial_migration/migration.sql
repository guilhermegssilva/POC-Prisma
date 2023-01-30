-- CreateTable
CREATE TABLE "genres" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "gameId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "platforms" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "platforms_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "games" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "platformId" INTEGER NOT NULL,
    "genreId" INTEGER NOT NULL,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);


-- CreateIndex
CREATE UNIQUE INDEX "genres_name_key" ON "genres"("name");

CREATE UNIQUE INDEX "platforms_name_key" ON "platforms"("name");

CREATE UNIQUE INDEX "reviews_gameId_key" ON "reviews"("gameId");


-- AlterTable
ALTER TABLE "games" ADD CONSTRAINT "games_fk0" FOREIGN KEY ("platformId") REFERENCES "platforms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "games" ADD CONSTRAINT "games_fk1" FOREIGN KEY ("genreId") REFERENCES "genres"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "reviews" ADD CONSTRAINT "reviews_fk0" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
