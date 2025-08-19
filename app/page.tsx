"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function AviatorSignalsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const playClickSound = () => {
    if (typeof window !== "undefined") {
      // Som de clique simples usando Web Audio API
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1)

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.1)
    }
  }

  const handleJoinGroup = (platform: string, url: string) => {
    playClickSound()
    setTimeout(() => {
      window.open(url, "_blank")
    }, 200)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center min-h-screen px-4">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          {/* Main Content */}
          <div
            className={`relative z-10 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Logo/Icon */}
            <div className="mb-8 animate-bounce">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent animate-pulse">
              AVIATOR MILIONÁRIO
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold mb-8 text-green-400">SALA VIP DE SINAIS FREE</h2>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/50 px-4 py-2 text-sm animate-pulse flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3L4 14h7v7l9-11h-7V3z" />
                </svg>
                Sinais em Tempo Real
              </Badge>
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 px-4 py-2 text-sm animate-pulse delay-300 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                Estratégias Infalíveis
              </Badge>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/50 px-4 py-2 text-sm animate-pulse delay-600 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V16h-2.67v2.09c-2.84-.48-5.09-2.8-5.09-5.59s2.25-5.11 5.09-5.59V9h2.67v-2.09c2.84.48 5.09 2.8 5.09 5.59s-2.25 5.11-5.09 5.59z" />
                </svg>
                Lucros Garantidos
              </Badge>
            </div>

            {/* Join Buttons - Vertical Layout */}
            <div className="flex flex-col gap-6 justify-center items-center max-w-md mx-auto">
              {/* Telegram Button */}
              <Button
                onClick={() => handleJoinGroup("Telegram", "https://t.me/boost/milionariomrx")}
                className="bg-black border border-green-500 hover:bg-green-500/10 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 text-lg w-full flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                ENTRAR AGORA
              </Button>

              {/* WhatsApp Button */}
              <Button
                onClick={() => handleJoinGroup("WhatsApp", "https://chat.whatsapp.com/Dyskkanskksjs")}
                className="bg-black border border-green-500 hover:bg-green-500/10 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 text-lg w-full flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                ENTRAR AGORA
              </Button>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-300 mb-4 flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9l-5.91.74L12 16l-4.09-6.26L2 9l6.91-.74L12 2z" />
                </svg>
                Junte-se a milhares de membros que já estão lucrando!
              </p>
              <div className="flex justify-center items-center gap-2 text-green-400 animate-pulse">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                <span className="text-sm font-semibold">ONLINE AGORA</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-12 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-green-500/10 rounded-2xl border border-green-500/20">
                <div className="text-3xl font-bold text-green-400 mb-2">15K+</div>
                <div className="text-gray-300">Membros Ativos</div>
              </div>
              <div className="p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                <div className="text-3xl font-bold text-emerald-400 mb-2">98%</div>
                <div className="text-gray-300">Taxa de Acerto</div>
              </div>
              <div className="p-6 bg-green-500/10 rounded-2xl border border-green-500/20">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Sinais Disponíveis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
