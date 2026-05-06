import ReactApexChart from 'react-apexcharts'
import { useTheme } from '../../context/ThemeContext'
import { useMemo } from 'react'

// Injects dark-mode-aware default options
export default function ApexWrapper({ options = {}, series, type, height = 300 }) {
  const { dark } = useTheme()

  const merged = useMemo(() => ({
    chart: {
      fontFamily: 'Inter, sans-serif',
      toolbar: { show: false },
      background: 'transparent',
      ...options.chart,
    },
    theme: { mode: dark ? 'dark' : 'light' },
    grid: {
      borderColor: dark ? '#374151' : '#f3f4f6',
      strokeDashArray: 4,
      ...options.grid,
    },
    tooltip: {
      theme: dark ? 'dark' : 'light',
      ...options.tooltip,
    },
    ...options,
  }), [options, dark])

  return (
    <ReactApexChart
      options={merged}
      series={series}
      type={type}
      height={height}
    />
  )
}
