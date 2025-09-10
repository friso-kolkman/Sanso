const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create default clinic settings
  const clinicSettings = await prisma.clinicSettings.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      clinicTimezone: 'Europe/Rome',
      slotMinutes: 60,
      bufferMinutes: 15,
      maxDaysInAdvance: 60,
      minLeadMinutes: 1440, // 24 hours
      businessHoursJson: JSON.stringify({
        mon: [{ start: '08:00', end: '18:00' }],
        tue: [{ start: '08:00', end: '18:00' }],
        wed: [{ start: '08:00', end: '18:00' }],
        thu: [{ start: '08:00', end: '18:00' }],
        fri: [{ start: '08:00', end: '18:00' }],
        sat: [{ start: '09:00', end: '13:00' }],
        sun: []
      }),
      closedDatesJson: JSON.stringify(['2025-12-25', '2025-12-26']), // Christmas and Boxing Day
      adminEmail: process.env.CLINIC_ADMIN_EMAIL || 'admin@hbotclinic.com',
      emailFrom: process.env.EMAIL_FROM || 'HBOT Clinic <no-reply@hbotclinic.com>'
    }
  })

  console.log('✅ Clinic settings created:', clinicSettings.id)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 