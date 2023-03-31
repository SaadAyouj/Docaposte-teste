import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react";

function CustomRadio(props: any) {
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

function MappedGroup({ changeFilterType }: any) {
  const list = [
    { name: "", libelle: "All" },
    { name: "movie", libelle: "Movie" },
    { name: "tvShow", libelle: "Tv Show" },
  ];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "test",
    defaultValue: "",
    onChange: (type: string) => changeFilterType(type),
  });

  const group = getRootProps();
  return (
    <HStack {...group} spacing="30px" mt="25px" fontSize={20} fontWeight="bold">
      {list.map((item) => (
        <CustomRadio key={item.name} {...getRadioProps({ value: item.name })}>
          {item.libelle}
        </CustomRadio>
      ))}
    </HStack>
  );
}

export default function Filter({ changeFilterType }: any) {
  return (
    <>
      <MappedGroup
        changeFilterType={(type: string) => changeFilterType(type)}
      />
    </>
  );
}
