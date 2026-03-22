import { useMemo, useState } from 'react'
import Button from '../ui/Button'
import { cn } from '../../lib/cn'

const steps = {
  start: {
    question: '¡Hola! Soy el asistente TAPC SAS. ¿En qué te puedo ayudar?',
    options: [
      { label: 'Permisos y licenciamiento', next: 'permisos' },
      { label: 'Obras civiles e interventoría', next: 'obras' },
      { label: 'Saneamiento y recursos hídricos', next: 'agua' },
    ],
  },
  permisos: {
    question: 'Perfecto. ¿En qué etapa estás?',
    options: [
      { label: 'Diagnóstico inicial', next: 'close' },
      { label: 'Trámite en curso', next: 'close' },
      { label: 'Riesgo regulatorio', next: 'close' },
    ],
  },
  obras: {
    question: 'Perfecto. ¿Qué necesitas priorizar?',
    options: [
      { label: 'Planeación de obra', next: 'close' },
      { label: 'Interventoría técnica', next: 'close' },
      { label: 'Control de calidad/plazo', next: 'close' },
    ],
  },
  agua: {
    question: 'Entendido. ¿Qué tipo de apoyo requieres?',
    options: [
      { label: 'Diseño/optimización', next: 'close' },
      { label: 'Potabilización/reúso', next: 'close' },
      { label: 'Evaluación operativa', next: 'close' },
    ],
  },
}

function ChatbotWidget({ whatsappNumber }) {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState('start')
  const [answers, setAnswers] = useState([])

  const currentStep = steps[step]

  const whatsappUrl = useMemo(() => {
    const text = encodeURIComponent(
      `Hola TAPC SAS, vengo del chatbot web. Necesito apoyo en: ${answers.join(' > ') || 'Consulta general'}`,
    )
    return `https://wa.me/${whatsappNumber}?text=${text}`
  }, [answers, whatsappNumber])

  const onSelect = (label, next) => {
    setAnswers((prev) => [...prev, label])
    setStep(next)
  }

  const reset = () => {
    setStep('start')
    setAnswers([])
  }

  const isCloseStep = step === 'close'

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-[320px] rounded-2xl border border-neutral-200 bg-white p-4 shadow-soft">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-primary-700">Asistente TAPC SAS</p>
            <button type="button" className="text-sm text-neutral-500" onClick={() => setOpen(false)}>
              Cerrar
            </button>
          </div>

          {!isCloseStep ? (
            <>
              <p className="text-sm text-neutral-700">{currentStep.question}</p>
              <div className="mt-3 grid gap-2">
                {currentStep.options.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => onSelect(option.label, option.next)}
                    className={cn(
                      'rounded-md border border-neutral-300 px-3 py-2 text-left text-sm transition',
                      'hover:border-primary-500 hover:bg-primary-50',
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="text-sm text-neutral-700">
                ¡Gracias! Con esta información te conectamos con un especialista por WhatsApp para una atención más rápida.
              </p>
              <Button as="a" href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-4 w-full" size="md">
                Ir a WhatsApp
              </Button>
              <button type="button" className="mt-3 w-full text-sm text-neutral-500" onClick={reset}>
                Reiniciar flujo
              </button>
            </>
          )}
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="mt-3 rounded-full bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-700"
      >
        Chat WhatsApp
      </button>
    </div>
  )
}

export default ChatbotWidget
