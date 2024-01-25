import { Children, FormEvent, useState } from 'react'
import { FromList, Campo, BtnPesquisar } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FromList >
      <Campo
      />
      <BtnPesquisar>
        Pesquisar
      </BtnPesquisar>
    </FromList>
  )
}
export default FormVagas
