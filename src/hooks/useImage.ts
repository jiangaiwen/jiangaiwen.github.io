import { ref, Ref, watch } from 'vue'
export const useImageLoader = (imageUrl: Ref<string>) => {
    const image = ref<HTMLImageElement>();
    /**
     * 加载图片
     * @param imgSrc 图片地址
     * @returns HTMLImageElement
     */
    const loadImagePromise = (url: string) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                resolve(img);
            };
            img.onerror = (err) => {
                reject(err);
            };
        });
    };
    const load = (url: string) => {
        loadImagePromise(url).then((img) => {
            image.value = img;
        }).catch(err => {
            console.error(err);
        });
    };

    /**
     * 监听当图片地址改变时，重新加载图片
     */
    watch(imageUrl, (value, oldValue) => {
        if (value !== oldValue) {
            load(value);
        }
    });

    /**
     * 加载图片
     */
    load(imageUrl.value);

    return {
        /** 响应式的图片对象 */
        image
    };
}