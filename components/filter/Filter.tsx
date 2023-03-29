import {
    Box,
    HStack,
    useRadio,
    useRadioGroup,
  } from "@chakra-ui/react";
  
  
  function CustomRadio(props:any) {
    const { getInputProps, getCheckboxProps } = useRadio(props);
    const input = getInputProps();
    const checkbox = getCheckboxProps();
  
    return (
      <Box as="label">
        <input {...input} />
        <Box {...checkbox} _checked={{ color: "rgb(175,32,172)" }}>
          {props.children}
        </Box>
      </Box>
    );
  }
  
  function MappedGroup() {
    const list = ["All", "Movie", "TV Show"];
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: "test",
      defaultValue: "All",
      onChange: console.log
    });
  
    const group = getRootProps();
    return (
      <HStack {...group} spacing='30px' mt='25px'  fontSize={20}
      fontWeight="bold">
        {list.map((item) => (
          <CustomRadio key={item} {...getRadioProps({ value: item })}>
            {item}
          </CustomRadio>
        ))}
      </HStack>
    );
  }

  export default function Filter() {
  
  return(
    <>
        <MappedGroup />
    </>
  );
}