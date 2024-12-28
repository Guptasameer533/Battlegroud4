'use client'

import { ChevronLeft, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from 'react'

interface MapInfo {
  id: number
  name: string
  image: string
  mode: string
}

interface ServerData {
  stats: {
    players: string
    ping: string
    tickrate: string
  }
  settings: [string, string][]
  advanced: [string, string][]
  rules: [string, string][]
}

const maps: MapInfo[] = [
  {
    id: 1,
    name: "DAWNBREAKER",
    image: "/placeholder.svg?height=200&width=400",
    mode: "CONQUEST LARGE"
  },
  {
    id: 2,
    name: "PROPAGANDA",
    image: "/placeholder.svg?height=200&width=400",
    mode: "CONQUEST LARGE"
  },
  {
    id: 3,
    name: "OPERATION LOCKER",
    image: "/placeholder.svg?height=200&width=400",
    mode: "CONQUEST LARGE"
  },
  {
    id: 4,
    name: "LANCANG DAM",
    image: "/placeholder.svg?height=200&width=400",
    mode: "CONQUEST LARGE"
  },
  {
    id: 5,
    name: "SIEGE OF SHANGHAI",
    image: "/placeholder.svg?height=200&width=400",
    mode: "CONQUEST LARGE"
  },
  {
    id: 6,
    name: "GOLMUD RAILWAY",
    image: "/placeholder.svg?height=200&width=400",
    mode: "CONQUEST LARGE"
  }
]

export default function ServerInfo() {
  const [serverData, setServerData] = useState<ServerData | null>(null)

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/server-info')
        const data = await response.json()
        setServerData(data)
      } catch (error) {
        console.error('Failed to fetch server data:', error)
      }
    }

    fetchServerData()
  }, [])

  if (!serverData) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>
  }

  return (
    <div 
      className="min-h-screen text-white p-6 relative overflow-auto"
      style={{
        backgroundImage: "url('/601abb0b487fc1bfc56a1c3b_menu__background-30blur.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >      
      {/* Content Container */}
      <div className="relative z-10">
        {/* Header Navigation */}
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white hover:text-black" asChild>
            <Link href="#">
              <ChevronLeft className="h-6 w-6" />
            </Link>
          </Button>
          <div className="flex items-center gap-2 text-sm">
            <span>MULTIPLAYER</span>
            <span>/</span>
            <span>SERVER BROWSER</span>
          </div>
        </div>

        {/* Server Title */}
        <h1 className="text-2xl font-bold mb-6">SERVER INFO</h1>

        {/* Main Content */}
        <Card className="bg-black/50 border-zinc-800">
          <CardHeader className="border-b border-zinc-800">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="US Flag"
                  width={24}
                  height={24}
                  className="rounded"
                />
                <h2 className="text-xl font-bold">! RC3-BASEMAPS</h2>
              </div>
              <div className="text-sm">
                CONQUEST LARGE - LANCANG DAM - CUSTOM - 60 HZ
              </div>
              <div className="text-xs text-zinc-300">
                Server protected by The_X-50 AntiCheat. Vip !Rules, Questions, Request, Appeal. Visit us: www.epg.gg | Discord
                https://discord.gg/5r5NK4d
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            {/* Action Buttons */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <Button className="bg-zinc-800 text-white hover:bg-white hover:text-black transition-colors">JOIN</Button>
              <Button className="bg-zinc-800 text-white hover:bg-white hover:text-black transition-colors">SPECTATE</Button>
              <Button className="bg-zinc-800 text-white hover:bg-white hover:text-black transition-colors">JOIN AS COMMANDER</Button>
              <Button className="bg-zinc-800 text-white hover:bg-white hover:text-black transition-colors">
                <Star className="h-5 w-5 mr-2" />
                13672
              </Button>
            </div>

            {/* Server Stats */}
            <div className="grid grid-cols-3 gap-8 mb-6 text-sm">
              <div>
                <div>PLAYERS</div>
                <div className="text-xl">{serverData.stats.players}</div>
              </div>
              <div>
                <div>PING</div>
                <div className="text-xl">{serverData.stats.ping}</div>
              </div>
              <div>
                <div>TICKRATE</div>
                <div className="text-xl">{serverData.stats.tickrate}</div>
              </div>
            </div>

            {/* Settings Grid */}
            <div className="grid grid-cols-3 gap-8 text-sm mb-8">
              <div className="space-y-4">
                <h3 className="font-semibold mb-2">SETTINGS</h3>
                <div className="space-y-2">
                  {serverData.settings.map(([label, value]) => (
                    <div 
                      key={label} 
                      className="grid grid-cols-2 gap-2 p-2 hover:bg-white hover:text-black transition-colors cursor-pointer rounded"
                    >
                      <div>{label}</div>
                      <div>{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold mb-2">ADVANCED</h3>
                <div className="space-y-2">
                  {serverData.advanced.map(([label, value]) => (
                    <div 
                      key={label} 
                      className="grid grid-cols-2 gap-2 p-2 hover:bg-white hover:text-black transition-colors cursor-pointer rounded"
                    >
                      <div>{label}</div>
                      <div>{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold mb-2">RULES</h3>
                <div className="space-y-2">
                  {serverData.rules.map(([label, value]) => (
                    <div 
                      key={label} 
                      className="grid grid-cols-2 gap-2 p-2 hover:bg-white hover:text-black transition-colors cursor-pointer rounded"
                    >
                      <div>{label}</div>
                      <div>{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Rotation */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">MAP ROTATION</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-h-[600px] overflow-y-auto custom-scrollbar">
                {[...maps, ...maps].map((map, index) => (
                  <div 
                    key={`${map.id}-${index}`}
                    className="group relative transform transition-transform duration-300 hover:-translate-y-2"
                  >
                    <div className="relative aspect-[2/1] overflow-hidden">
                      <Image
                        src={map.image}
                        alt={map.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60 group-hover:bg-white/90 transition-colors">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white group-hover:text-black">
                          <div className="text-sm">{map.mode}</div>
                          <div className="font-bold">{map.name}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  )
}

