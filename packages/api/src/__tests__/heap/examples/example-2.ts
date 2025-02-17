/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+ws_labs
 * @format
 */

import type {IHeapSnapshot, IHeapNode} from '@memlab/core';
import {dumpNodeHeapSnapshot} from '@memlab/core';
import {getHeapFromFile} from '@memlab/heap-analysis';

(async function () {
  const heapFile = dumpNodeHeapSnapshot();
  const heap: IHeapSnapshot = await getHeapFromFile(heapFile);

  // get the total number of heap objects
  heap.nodes.length;

  heap.nodes.forEach((node: IHeapNode) => {
    console.log(node.name);
  });
})();
