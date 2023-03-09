# violin-controller
マイクロサービスプロジェクト：　OPERATOR

        apt update
        apt upgrade
        apt install vim
        vim xxxx.gen
        :set ff
        :set ff=unix
        :wq!
## scheduler

    核心方法 sync
    是否加锁
    1，从crd中定义的zone和node来 查询node和zone，如果不存在则返回。
    2，先从crd中定义的 namespace和 deploymentLabelSelector中 筛选出 所有的deployment,如果筛选结果为空或者为0，则不进行任何操作，返回
    3，从etcd中zone和node中数量
        map(zone1): 0
        map(zone2): 0
        map(node1): 0
        map(node2): 0
        map(node3): 0
        map(node4): 0
        map(node5): 0
        map(node6): 0
        对所有的deployment 进行 循环：
            deployment的pod做循环：
                如果 pod 已经被发布到上面 zone/node中，在map(zone) + 1,  map(node1) + 1
                如果 pod 没有被发布在 上面 zone/node中，重新调度该pod 到zone/node上，map(zone) + 1,  map(node1) + 1


        调度策略:
            最好是数据结构来做
            1. deployment的pod数量 小于zone的数量时候，该deployment的pod优先调度 到 pod数/node数 较小zone 上的node中pod数量最少的，
            同时保证pod在任意zone的数量不大于1
            2. deployment的pod数量 大于zone的数量时候，至少每一个zone都有一个该deployment的pod，
            其他的pod优先调度 到 pod数/node数 较小zone 上的同类pod最少的node上。
    



