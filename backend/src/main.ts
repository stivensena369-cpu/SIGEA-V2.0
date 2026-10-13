import { app } from './app';
import { prisma } from '@database/prisma';

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  console.log(` Server escuchando puerto ${PORT}`);

  try {
    await prisma.$connect();
    console.log('✅ Database connected');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1);  
  }
});