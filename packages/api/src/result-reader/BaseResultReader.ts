/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+ws_labs
 * @format
 */

import {utils, FileManager} from '@memlab/core';
import fs from 'fs-extra';

/**
 * A utility entity to read all generated files from
 * the directory holding the data and results from
 * a memlab run
 */
export default class BaseResultReader {
  protected workDir: string;
  protected fileManager: FileManager;
  private isValid: boolean;

  /**
   * build a result reader
   * @param workDir absolute path of the directory where the data
   * and generated files of the memlab run were stored
   */
  protected constructor(workDir = '') {
    this.fileManager = new FileManager();
    if (workDir === '') {
      workDir = this.fileManager.getWorkDir();
    }
    this.workDir = workDir;
    this.check();
  }

  protected check(): void {
    this.isValid = fs.existsSync(this.workDir);
    if (!this.isValid) {
      utils.haltOrThrow(`invalid/removed data directory: ${this.workDir}`);
    }
  }

  /**
   * internal
   * @param workDir
   * @returns
   */
  static from(workDir = ''): BaseResultReader {
    return new BaseResultReader(workDir);
  }

  /**
   * get the directory where the data and generated files of
   * the memlab run were stored
   * @returns absolute path of the directory
   * * **Examples**:
   * ```javascript
   * const {takeSnapshots} = require('@memlab/api');
   *
   * (async function () {
   *   const scenario = { url: () => 'https://www.npmjs.com'};
   *   const result = await takeSnapshots({scenario});
   *
   *   // get the directory that stores all the files
   *   // generated from the takeSnapshots call
   *   const dataDir = result.getRootDirectory();
   * })();
   * ```
   */
  public getRootDirectory(): string {
    this.check();
    return this.workDir;
  }

  /**
   * clean up data/files generated from the memlab browser interaction run
   * @returns no return value
   * * **Examples**:
   * ```javascript
   * const {takeSnapshots} = require('@memlab/api');
   *
   * (async function () {
   *   const scenario = { url: () => 'https://www.npmjs.com'};
   *   const result = await takeSnapshots({scenario});
   *
   *   // delete all data/files generated by takeSnapshots
   *   result.cleanup();
   * })();
   * ```
   */
  public cleanup(): void {
    if (!this.isValid) {
      return;
    }
    fs.removeSync(this.workDir);
    this.isValid = false;
  }
}
