export default function classNames(...classes) {
    return classes
        .map((item) => {
            if (typeof item === 'string') return item;

            const keys = Object.keys(item);

            return keys.filter((k) => item[k]);
        })
        .flat()
        .filter((c) => !!c)
        .join(' ');
}
