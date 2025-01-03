import React, { createContext, useState, useEffect, ReactNode } from "react"
import { LogEntry } from "../types/logTypes"
import { loadLogs, saveLogs } from "../utils/storage"

type LogContextType = {
  logs: LogEntry[]
  addLog: (log: LogEntry) => void
  isLoaded: boolean
}

export const LogContext = createContext<LogContextType | undefined>(undefined)

export const LogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const fetchLogs = async () => {
      const storedLogs = await loadLogs()
      setLogs(storedLogs)
      setIsLoaded(true)
    }
    fetchLogs()
  }, [])

  const addLog = async (log: LogEntry) => {
    const updatedLogs = [...logs, log]
    setLogs(updatedLogs)
    await saveLogs(updatedLogs)
  }

  return (
    <LogContext.Provider value={{ logs, addLog, isLoaded }}>
      {children}
    </LogContext.Provider>
  )
}
