import InstagramIcon from '@mui/icons-material/Instagram'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'

const data = {
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
      name: 'Juju',
      isAlm: false,
    },
    role: 'cpw',
    fullName: 'Nurlailatul Musthavdhah',
    gender: 'female',
    mother: {
      name: 'Epa Nurjanah Bpk. Sakimun',
      isAlm: false,
    },
  },
}

const Profile: NextPage = () => {
  const { media } = useGlobalStore()
  return (
    <Section gap={2} paddingX={3.5} paddingY={6.5} sx={{ backgroundColor: 'secondary.main' }}>
      <Box
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        bgcolor="#d5d5d5"
        sx={{
          backgroundImage: `url(${media.images.bg3})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'top center',
          opacity: 0.2,
          pointerEvents: 'none',
        }}
      />
      <Stack zIndex={2}>
        <motion.div
          initial={{ opacity: 0, translateY: -100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Typography className={fonts.marcellus.className} color="primary" fontSize={35}>
            Groom & Bride
          </Typography>
        </motion.div>
        <Stack gap={8} alignItems="center" marginTop={4}>
          {([data.cpw, data.cpp] as const).map((current, i) => {
            const isMale = current.gender === 'male'
            return (
              <React.Fragment key={i}>
                <Box width="80%">
                  <motion.div
                    initial={{ opacity: 0, translateY: i ? 200 : -200 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 1.2 }}
                  >
                    <Stack key={i} width="100%" alignItems="center" gap={2}>
                      <Box
                        width={300}
                        height={425}
                        borderRadius={1000}
                        padding={1}
                        boxShadow="0px 0px 30px 0px rgba(0, 0, 0, 0.28)"
                        sx={{ backgroundColor: 'secondary.main' }}
                      >
                        <Box
                          width="100%"
                          height="100%"
                          borderRadius={1000}
                          sx={{
                            backgroundImage: `url(${media.images[i ? 'profileAhmad' : 'profileIlla']})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: isMale ? '140%' : '200%',
                            backgroundPosition: isMale ? 'center bottom' : '-190px bottom',
                          }}
                        ></Box>
                      </Box>
                      <motion.div
                        initial={{ translateX: i ? -100 : 100 }}
                        whileInView={{ translateX: 0 }}
                        transition={{ duration: 1.2 }}
                      >
                        <Typography
                          className={fonts.astonScript.className}
                          fontSize={32}
                          marginTop={2}
                          color="primary"
                        >
                          {current.shortName}
                        </Typography>
                        <Typography
                          className={fonts.montserrat.className}
                          fontSize={16}
                          fontWeight="bold"
                        >
                          {current.fullName}
                        </Typography>
                      </motion.div>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.2 }}
                      >
                        <Box>
                          <Typography className={fonts.bodebeck.className} fontWeight="bold">
                            {isMale ? 'Putra' : 'Putri'} ke - {current.childOrder}
                          </Typography>
                          <Typography className={fonts.bodebeck.className} fontWeight="bold">
                            {(['father', 'mother'] as const)
                              .map((parent) => {
                                const { isAlm, name } = current[parent]
                                const isFather = parent === 'father'
                                return [
                                  isAlm ? '(Alm.)' : '',
                                  isFather ? 'Bpk.' : 'Ibu',
                                  name,
                                ].join(' ')
                              })
                              .join(' & ')}
                          </Typography>
                        </Box>
                      </motion.div>
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        height={50}
                        width={50}
                        padding={1}
                        color="white"
                        borderRadius={4}
                        sx={{
                          bgcolor: 'primary.main',
                          cursor: 'pointer',
                        }}
                      >
                        <InstagramIcon
                          fontSize={'medium'}
                          onClick={() =>
                            window.open(
                              'https://instagram.com/'.concat(
                                isMale ? 'ahmadfauzi7517' : 'lailatull2_',
                              ),
                              '_blank',
                            )
                          }
                        />
                      </Box>
                    </Stack>
                  </motion.div>
                </Box>
                {!i && (
                  <Typography className={fonts.marcellus.className} color="primary" fontSize={65}>
                    &
                  </Typography>
                )}
              </React.Fragment>
            )
          })}
        </Stack>
      </Stack>
    </Section>
  )
}

export default Profile
