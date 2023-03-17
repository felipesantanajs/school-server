-- DropForeignKey
ALTER TABLE "Discipline" DROP CONSTRAINT "Discipline_professorId_fkey";

-- AddForeignKey
ALTER TABLE "Discipline" ADD CONSTRAINT "Discipline_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
