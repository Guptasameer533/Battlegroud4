import { NextResponse } from 'next/server'

export async function GET() {
  // Simulated database response
  const serverInfo = {
    stats: {
      players: "60/64",
      ping: "104ms",
      tickrate: "60 Hz"
    },
    settings: [
      ['REGION', 'EUROPE - DE'],
      ['PUNKBASTER', 'ON'],
      ['FAIRFIGHT', 'ON'],
      ['PASSWORD', 'OFF'],
      ['PRESET', 'NORMAL']
    ],
    advanced: [
      ['MINIMAP', 'ON'],
      ['ONLY SQUAD LEADER SPAWN', 'OFF'],
      ['VEHICLES', 'ON'],
      ['TEAM BALANCE', 'ON'],
      ['MINIMAP SPOTTING', 'ON'],
      ['HUD', 'ON'],
      ['3P VEHICLE CAM', 'ON'],
      ['REGENERATIVE HEALTH', 'ON'],
      ['KILL CAM', 'ON'],
      ['FRIENDLY FIRE', 'OFF']
    ],
    rules: [
      ['TICKETS', '400'],
      ['VEHICLE SPAWN DELAY', '25'],
      ['BULLET DAMAGE', '100'],
      ['KICK AFTER TEAM KILLS', '5'],
      ['PLAYER HEALTH', '100'],
      ['PLAYER RESPAWN TIME', '100'],
      ['KICK AFTER IDLE', '300'],
      ['BAN AFTER KICKS', '3']
    ]
  }

  return NextResponse.json(serverInfo)
}

