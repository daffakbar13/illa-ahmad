/* eslint-disable no-underscore-dangle */
import { ObjectId } from 'mongodb'
import { NextRequest, NextResponse } from 'next/server'

import GuestsModel from '@/server/models/guests'
import ViewHistoriesModel from '@/server/models/view_histories'

type Params = { params: { id: string; name: string } }

export async function GET(_: NextRequest, { params }: Params) {
  const guests = await GuestsModel()
  const viewHistories = await ViewHistoriesModel()
  const data = await guests.findOneAndUpdate({ name: params.name }, { $inc: { seen: 1 } })

  if (data) {
    viewHistories.insertOne({
      guest_id: new ObjectId(),
      name: data.name,
      group_id: data.group_id,
      created_at: new Date(),
    })
    return new NextResponse(JSON.stringify({ data }), { status: 200 })
  }

  return new NextResponse(JSON.stringify({ data }), { status: 200 })
}

export async function PUT(req: Request, { params }: Params) {
  const guestId = new ObjectId(params.name)
  const body = await req.json()
  const guests = await GuestsModel()

  await guests.updateOne({ _id: guestId }, { $set: body })

  return NextResponse.json({ status: 204 })
}

export async function DELETE(_: Request, { params }: Params) {
  const guestId = new ObjectId(params.name)
  const guests = await GuestsModel()

  await guests.deleteOne({ _id: guestId })

  return NextResponse.json({ status: 204 })
}
