import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'
import dayjs from 'dayjs'
import Button from '@mui/material/Button'
import { CalendarMonthOutlined } from '@mui/icons-material'
import Link from 'next/link'

const CountDown: NextPage = () => {
  const { media } = useGlobalStore()
  const [date, setDate] = React.useState(dayjs())
  const weddingDate = dayjs('01-27-2025')
  const diff = [
    ['Hari', weddingDate.diff(date, 'd')],
    ['Jam', weddingDate.diff(date, 'h') % 24],
    ['Menit', weddingDate.diff(date, 'm') % 60],
    ['Detik', weddingDate.diff(date, 's') % 60],
  ]
  const details =
    'Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.'

  function getGoogleCalendarLink() {
    const format = 'YYYYMMDDTHHMMSSZ'
    const from = weddingDate.startOf('d').format(format)
    const to = weddingDate.endOf('d').format(format)

    const baseUrl = 'https://calendar.google.com/calendar/r/eventedit'
    const params = new URLSearchParams({
      text: 'Pernikahan Laila & Ahmad',
      dates: `${from}/${to}`,
      details,
      location:
        'Jl. Mayjen Sutoyo No.51, RT.2/RW.8, Cililitan, Kec. Kramat jati, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13640',
      ctz: 'Asia/Jakarta',
    })

    return `${baseUrl}?${params.toString()}`
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDate(dayjs())
    }, 1000)

    return () => clearInterval(timer)
  })

  return (
    <Section
      sx={{
        backgroundImage: `url(${media.images.forest1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
      }}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        sx={{
          backgroundImage: 'linear-gradient(180deg, #E6DED88F 0%, #E6DED8 100%)',
        }}
      />
      <Stack position="relative" width="100%" paddingY={7.5} paddingX={5} gap={2} zIndex={2}>
        <Box
          border="8px solid"
          borderColor="primary.main"
          height={480}
          overflow="hidden"
          sx={{
            borderRadius: '200px 200px 0 0',
            backgroundImage: `url(${media.images.forest6})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        >
          <img src="/videos/cinematic.gif" alt="" />
        </Box>
        <Stack flexDirection="row" gap={0.5}>
          {diff.map(([key, value], i) => (
            <React.Fragment key={i}>
              <Stack
                bgcolor="primary.main"
                paddingY={1.5}
                borderRadius={0.5}
                color="white"
                flex={1}
              >
                <Typography className={fonts.montserrat.className} fontWeight="bold">
                  {value}
                </Typography>
                <Typography className={fonts.montserrat.className} fontSize={10}>
                  {key}
                </Typography>
              </Stack>
            </React.Fragment>
          ))}
        </Stack>
        <Link href={getGoogleCalendarLink()} target="_blank">
          <Button sx={{ borderRadius: 0.5, gap: 1 }}>
            <CalendarMonthOutlined />
            Save The Date
          </Button>
        </Link>
        <Typography className={fonts.montserrat.className} fontWeight="500">
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            {details}
          </motion.div>
        </Typography>
        <Typography className={fonts.astonScript.className} fontSize={25} color="primary.main">
          <motion.div
            initial={{ translateY: 50 }}
            whileInView={{ translateY: 0 }}
            transition={{ duration: 1.2 }}
          >
            Laila & Ahmad
          </motion.div>
        </Typography>
      </Stack>
    </Section>
  )
}

export default CountDown
