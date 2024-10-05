import { Dropdown, Navbar } from 'flowbite-react'
import { HiCog8Tooth, HiPlusCircle } from 'react-icons/hi2'

export default function AppNav() {
  return (
    <Navbar fluid>
      <div className="flex md:order-2">
        <Dropdown arrowIcon inline label={<span className="font-medium">Baldur&apos;s Gate 3</span>}>
          <div className="px-4 pt-1 pb-2 text-xs text-gray-400">Switch games:</div>
          <Dropdown.Item>Skyrim</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item icon={HiPlusCircle}>Manage a new game</Dropdown.Item>
          <Dropdown.Item icon={HiCog8Tooth}>Settings</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse></Navbar.Collapse>
    </Navbar>
  )
}
