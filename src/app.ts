// import express from 'express'
import fastify from 'fastify'
import { PrismaClient } from 'generated/prisma'

// export const app = express()
export const app = fastify()

const prisma = new PrismaClient()
