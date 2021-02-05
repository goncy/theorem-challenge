import React from "react";
import {Divider, SkeletonCircle, Skeleton, Stack} from "@chakra-ui/react";

const BLOCKS = new Array(10).fill(true);

const LoadingScreen: React.FC = () => {
  return (
    <Stack borderWidth={1} boxShadow="sm" divider={<Divider />} padding={6} spacing={6}>
      <Skeleton height={12} width="100%" />
      {BLOCKS.map((block) => (
        <Stack key={block} direction="row" justifyContent="space-between">
          <Stack alignItems="center" direction="row" spacing={6}>
            <SkeletonCircle height={12} width={12} />
            <Skeleton height={10} width={280} />
          </Stack>
          <Skeleton height={12} width={48} />
        </Stack>
      ))}
    </Stack>
  );
};

export default LoadingScreen;
