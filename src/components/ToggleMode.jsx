import {useColorMode} from '@chakra-ui/color-mode'
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";



const ToggleMode = () => {
    const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Button onClick={() => toggleColorMode()} pos="absolute" top="0" right="0" m="20px">
    {colorMode === "dark" ? <SunIcon color="yellow.400" /> : <MoonIcon />}</Button>
  )
}

export default ToggleMode