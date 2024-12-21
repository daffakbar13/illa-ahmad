import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse(
    JSON.stringify({
      data: {
        cpp: {
          shortName: 'Ahmad',
          childOrder: 3,
          father: {
            name: 'Oding Abdul Kodir',
            isAlm: false,
          },
          role: 'cpp',
          fullName: 'Ahmad Fauzi',
          gender: 'male',
          mother: {
            name: 'Tuti Sumiati',
            isAlm: false,
          },
        },
        cpw: {
          shortName: 'Laila',
          childOrder: 1,
          father: {
            name: 'Sakimun',
            isAlm: false,
          },
          role: 'cpw',
          fullName: 'Nurlailatul Musthavdhah',
          gender: 'female',
          mother: {
            name: 'Epa Nurjanah',
            isAlm: false,
          },
        },
      },
    }),
    {
      status: 200,
    },
  )
}
