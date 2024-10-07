import { Footer } from 'flowbite-react'

export default function AppFooter() {
  return (
    <Footer className="py-3">
      <div className="w-full text-center text-sm">
        Copyright &copy; 2024{' '}
        <a className="hover:underline" href="https://dankotowski.dev" target="_blank" rel="noreferrer">
          Dan&nbsp;Kotowski
        </a>
      </div>
    </Footer>
  )
}
