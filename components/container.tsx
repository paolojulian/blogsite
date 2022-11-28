type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container mx-auto p-4 md:p-8">{children}</div>
}

export default Container
