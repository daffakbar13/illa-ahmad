import { AccountBalanceRounded, CalendarMonthRounded, MapRounded } from '@mui/icons-material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'

const Address: NextPage = () => {
  const { media } = useGlobalStore()

  return (
    <Section
      gap={3}
      paddingX={3}
      paddingY={9}
      sx={{
        backgroundColor: 'primary.main',
      }}
    >
      <motion.div
        initial={{ translateX: 100 }}
        whileInView={{ translateX: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Typography className={fonts.astonScript.className} fontSize={32} color="white">
          Wedding Event
        </Typography>
      </motion.div>
      <motion.div
        initial={{ translateY: 50 }}
        whileInView={{ translateY: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Typography className={fonts.montserrat.className} color="white" mb={4}>
          Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta Kerabat sekalian
          untuk menghadiri acara pernikahan kami:
        </Typography>
      </motion.div>
      {[
        { type: 'Akad Nikah', time: '08:00 - 10:00 WIB' },
        { type: 'Resepsi', time: '10:00 - Selesai' },
      ].map((e, i) => (
        <Stack
          key={i}
          border="8px solid"
          borderColor="primary.main"
          alignItems="center"
          position="relative"
          borderRadius={1000}
          paddingX={3.5}
          paddingY={15}
          overflow="hidden"
          boxShadow="0px 0px 30px 0px rgba(0,0,0,0.5)"
          width="100%"
          gap={2}
          sx={{ backgroundColor: '#E6DED8' }}
        >
          <Box
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            bgcolor="#d5d5d5"
            sx={{
              backgroundImage: `url(${media.images.forest1})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
              opacity: 0.2,
              pointerEvents: 'none',
            }}
          />
          <motion.div
            initial={{ translateY: -50 }}
            whileInView={{ translateY: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Typography className={fonts.marcellus.className} fontSize={32} color="primary">
              {e.type}
            </Typography>
          </motion.div>
          <Divider sx={{ width: '50%' }}>
            <CalendarMonthRounded sx={{ fontSize: 25 }} />
          </Divider>
          <motion.div
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Typography className={fonts.montserrat.className} fontSize={17} fontWeight="bold">
              Senin
            </Typography>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Typography className={fonts.montserrat.className} fontSize={17} fontWeight="bold">
              27 Januari 2025
            </Typography>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Typography className={fonts.montserrat.className} fontSize={17} fontWeight="bold">
              {e.time}
            </Typography>
          </motion.div>
          <Divider sx={{ width: '50%' }}>
            <AccountBalanceRounded sx={{ fontSize: 25 }} />
          </Divider>
          <motion.div
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Typography className={fonts.montserrat.className} fontWeight="bold">
              Aula Desa Mekarwangi
            </Typography>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Typography className={fonts.montserrat.className}>
              Jl. Panji Siliwangi No. 03, Mekarwangi, Kec. Sukamantri, Kabupaten Ciamis, Jawa Barat
              46264
            </Typography>
          </motion.div>
        </Stack>
      ))}
      <Stack
        border="8px solid"
        borderColor="primary.main"
        alignItems="center"
        position="relative"
        borderRadius={2}
        overflow="hidden"
        boxShadow="0px 0px 30px 0px rgba(0,0,0,0.5)"
        width="100%"
        gap={2}
        sx={{ backgroundColor: '#E6DED8' }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.45525198317497!2d108.3430115042246!3d-7.093038806569349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f40cf98213fff%3A0x4ff04f4dd6c69ee9!2sKantor%20Desa%20Mekarwangi!5e0!3m2!1sen!2sid!4v1733631498653!5m2!1sen!2sid"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Stack>
    </Section>
  )
}

export default Address
