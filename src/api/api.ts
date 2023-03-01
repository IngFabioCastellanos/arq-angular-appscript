interface propsApi {
  action: string;
  idDatabase?: string;
}

export async function api(props: propsApi): Promise<any> {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    google.script.run
      .withFailureHandler((err: string) => {
        reject(err);
      })
      .withSuccessHandler((res: string) => {
        if (typeof res == 'string') {
          resolve(JSON.parse(res));
        }
        resolve(res);
      })
      [props.action](props);
  });
}
