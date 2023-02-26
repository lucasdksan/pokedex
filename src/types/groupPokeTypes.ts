export type defaultType = {
    name: string;
    url: string;
}

export type game = {
    version: defaultType;
    game_index: number;
}

export type details = {
    rarity: number;
    version: defaultType;
}

export type abilities = {
    ability: defaultType;
    is_hidden: boolean;
    slot: number;
}

export type group_detail = {
    level_learned_at: number;
    move_learn_method: defaultType;
    version_group: defaultType;
}

export type stat = {
    base_stat: number;
    effort: number;
    stat: defaultType;
}

export type typing = {
    slot: number;
    type: defaultType;
}